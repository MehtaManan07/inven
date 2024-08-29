import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import Constants from 'expo-constants';

import { getUsersByRole } from '@api';
import { QueryKeyGenerator } from '@utils';
import useAuth from '../auth/useAuth';
import { UserRole } from '@types';

const REQUEST_RETRY_COUNT: number =
  Constants.expoConfig?.extra?.requestRetryCount;

type ApiReturnType = Awaited<ReturnType<typeof getUsersByRole>>;
interface Options<TData>
  extends Omit<
    UseQueryOptions<ApiReturnType, unknown, TData, string[]>,
    'queryKey' | 'queryFn' | 'select'
  > {
  select?: (data: ApiReturnType) => TData;
  roles: UserRole[];
}

const useFetchUsersByRole = <T = ApiReturnType>({
  roles,
  ...options
}: Options<T>) => {
  const { data: authToken = '' } = useAuth({ select: (data) => data.token });
  if (!authToken) {
    throw new Error('No auth token found');
  }

  const fetchAvailableItemsQuery = useQuery({
    queryKey: QueryKeyGenerator.UserRoles(roles),
    queryFn: async () => {
      const response = await getUsersByRole({ authToken, roles });
      return response;
    },
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    retry: REQUEST_RETRY_COUNT,
    staleTime: Infinity,
    ...options,
  });

  return fetchAvailableItemsQuery;
};

export default useFetchUsersByRole;
