import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import Constants from 'expo-constants';

import { fetchCategories } from '@api';
import { QueryKeyGenerator } from '@utils';

const REQUEST_RETRY_COUNT: number =
  Constants.expoConfig?.extra?.requestRetryCount;

type ApiReturnType = Awaited<ReturnType<typeof fetchCategories>>;
type QueryData = {
  categories: ApiReturnType;
  subCategories: string[];
  sizes: string[];
};
interface Options<TData>
  extends Omit<
    UseQueryOptions<QueryData, unknown, TData, string[]>,
    'queryKey' | 'queryFn' | 'select'
  > {
  select?: (data: QueryData) => TData;
  name?: string;
}

const useFetchCategories = <T = QueryData>({
  name,
  ...options
}: Options<T> = {}) => {
  const fetchAvailableItemsQuery = useQuery({
    queryKey: QueryKeyGenerator.Categories(),
    queryFn: async () => {
      const response = await fetchCategories({ name });
      const categoriesSet = new Set<string>();
      const sizesSet = new Set<string>();
      response.forEach((category) => {
        category.rawMaterials.forEach((material) => {
          material.categories.forEach((cat) => {
            categoriesSet.add(cat);
          });
          sizesSet.add(material.size);
        });
      });
      return {
        categories: response,
        subCategories: Array.from(categoriesSet),
        sizes: Array.from(sizesSet),
      };
    },
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    retry: REQUEST_RETRY_COUNT,
    staleTime: Infinity,
    ...options,
  });

  return fetchAvailableItemsQuery;
};

export default useFetchCategories;
export { QueryData as CategoriesQueryData };
