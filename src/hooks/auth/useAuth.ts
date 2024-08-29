import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { useQueryClient } from '@providers';

import { QueryKeyGenerator } from '@utils';

type QueryData = {
  token: string;
};

const initialData: QueryData = {
  token: '',
};
interface Options<TData>
  extends Omit<
    UseQueryOptions<QueryData, unknown, TData, string[]>,
    'queryKey' | 'queryFn' | 'cacheTime' | 'select'
  > {
  select?: (data: QueryData) => TData;
}

const useAuth = <T = QueryData>(options?: Options<T>) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: QueryKeyGenerator.Auth(),
    queryFn: async ({ queryKey }) => {
      const previousData = queryClient.getQueryData<QueryData>(queryKey);
      return previousData ?? initialData;
    },
    staleTime: Infinity,
    refetchOnReconnect: true,
    retry: 3,
    ...options,
  });
  return query;
};

export default useAuth;
export { QueryData as AuthData };
