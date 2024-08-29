// pinMemeOnServer
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { loginUser } from '@api';
import { useQueryClient } from '@providers';
import { QueryKeyGenerator } from '@utils';
import { AuthData } from './useAuth';
import { primitiveStorage, StorageKeys } from 'storage';

type MemePinApi = typeof loginUser;
type ApiParams = Parameters<MemePinApi>[0];
type ApiReturnType = ReturnType<MemePinApi>;

type MutationArgs = ApiParams;

type Options = Omit<
  UseMutationOptions<Awaited<ApiReturnType>, unknown, MutationArgs>,
  'mutationFn'
>;
const usePinMemeMutation = ({
  onSuccess,
  onError,
  onMutate,
  ...options
}: Options) => {
  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ password, username }) => {
      return await loginUser({
        password,
        username,
      });
    },
    onMutate: (data) => {
      if (onMutate) {
        onMutate(data);
      }
    },
    onSuccess: (data, variables, context) => {
      if (onSuccess) {
        onSuccess(data, variables, context);
      }
      client.setQueryData(QueryKeyGenerator.Auth(), (prev: AuthData) => {
        return {
          ...prev,
          token: data.data.accessToken,
        };
      });
      primitiveStorage.set(StorageKeys.AuthToken, data.data.accessToken);
    },
    onError(error, variables, context) {
      if (onError) {
        onError(error, variables, context);
      }
    },
    retry: 2,
    retryDelay: (attempt) => attempt * 1000,
    ...options,
  });
  return mutation;
};

export default usePinMemeMutation;
