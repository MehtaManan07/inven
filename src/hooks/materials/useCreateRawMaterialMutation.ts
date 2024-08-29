import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { createRawMaterial } from '@api';
import { useQueryClient } from '@providers';
import { QueryKeyGenerator } from '@utils';
import { CategoriesQueryData } from './useFetchCategories';

type MemePinApi = typeof createRawMaterial;
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
  const mutation = useMutation({
    mutationFn: async ({ data }) => {
      return await createRawMaterial({ data });
    },
    onMutate: (data) => {
      if (onMutate) {
        onMutate(data);
      }
    },
    onSuccess: (data, variables, context) => {
      const queryKey = QueryKeyGenerator.Categories();
      queryClient.setQueryData<CategoriesQueryData>(
        queryKey,
        (olaData: CategoriesQueryData) => {
          return {
            ...olaData,
            sizes: Array.from(new Set([...olaData.sizes, data.size])),
            subCategories: Array.from(
              new Set([...olaData.subCategories, ...data.categories])
            ),
            categories: olaData.categories.map((category) => {
              if (category.name === variables.data.parentCategory) {
                return {
                  ...category,
                  rawMaterials: [...category.rawMaterials, data],
                };
              } else {
                return category;
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
