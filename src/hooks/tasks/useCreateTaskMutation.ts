import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { createTask } from '@api';
import { useQueryClient } from '@providers';
import { QueryKeyGenerator } from '@utils';
import { useAuth } from '../auth';
import { RawMaterialQueryData } from '../materials/useFetchRawMaterials';

type MemePinApi = typeof createTask;
type ApiParams = Parameters<MemePinApi>[0];
type ApiReturnType = ReturnType<MemePinApi>;

type MutationArgs = Omit<ApiParams, 'authToken'>;

type Options = Omit<
  UseMutationOptions<Awaited<ApiReturnType>, unknown, MutationArgs>,
  'mutationFn'
>;
const useCreateRawMaterialMutation = ({
  onSuccess,
  onError,
  onMutate,
  ...options
}: Options) => {
  const queryClient = useQueryClient();
  const { data: authToken } = useAuth({ select: (data) => data.token });
  if (!authToken) {
    throw new Error('Auth token not found');
  }
  const mutation = useMutation({
    mutationFn: async ({ payload }) => {
      return await createTask({ payload, authToken });
    },
    onMutate: (data) => {
      if (onMutate) {
        onMutate(data);
      }
    },
    onSuccess: (data, variables, context) => {
      const rawMaterialQuantities = variables.payload.rawMaterialQuantities;
      const rawMaterialIds = rawMaterialQuantities.map(
        (each) => each.materialId
      );
      const queryKey = QueryKeyGenerator.RawMaterials();
      queryClient.setQueryData<RawMaterialQueryData>(
        queryKey,
        (olaData: RawMaterialQueryData) => {
          return {
            ...olaData,
            data: olaData.data.map((each) => {
              if (!rawMaterialIds.includes(each.id)) {
                return each;
              } else {
                const material = rawMaterialQuantities.find(
                  (material) => material.materialId === each.id
                );
                if (!material) return each;
                return {
                  ...each,
                  totalWeight: each.totalWeight - material.quantityUsed,
                  availableUnits:
                    each.availableUnits -
                    material.quantityUsed / each.weightPerUnit,
                };
              }
            }),
          };
        }
      );
      if (onSuccess) {
        onSuccess(data, variables, context);
      }
    },
    onError(error, variables, context) {
      if (onError) {
        onError(error, variables, context);
      }
    },
    retry: 3,
    retryDelay: (attempt) => attempt * 1000,
    ...options,
  });
  return mutation;
};

export default useCreateRawMaterialMutation;
