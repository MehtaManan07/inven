import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import Constants from 'expo-constants';

import { getRawMaterials } from '@api';
import { QueryKeyGenerator } from '@utils';

const REQUEST_RETRY_COUNT: number =
  Constants.expoConfig?.extra?.requestRetryCount;

type ApiReturnType = Awaited<ReturnType<typeof getRawMaterials>>;
interface Options<TData>
  extends Omit<
    UseQueryOptions<ApiReturnType, unknown, TData, string[]>,
    'queryKey' | 'queryFn' | 'select'
  > {
  select?: (data: ApiReturnType) => TData;
  name?: string;
}

const useFetchRawMaterials = <T = ApiReturnType>({
  name,
  ...options
}: Options<T> = {}) => {
  const fetchAvailableItemsQuery = useQuery({
    queryKey: QueryKeyGenerator.RawMaterials(),
    queryFn: async () => {
      return await getRawMaterials({ name });
    },
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    retry: REQUEST_RETRY_COUNT,
    staleTime: Infinity,
    ...options,
  });

  return fetchAvailableItemsQuery;
};

export default useFetchRawMaterials;
export { ApiReturnType as RawMaterialQueryData };
