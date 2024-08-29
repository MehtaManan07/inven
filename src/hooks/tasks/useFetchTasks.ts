import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import Constants from 'expo-constants';

import { getTasks } from '@api';
import { QueryKeyGenerator } from '@utils';
import { useAuth } from '../auth';

const REQUEST_RETRY_COUNT: number =
  Constants.expoConfig?.extra?.requestRetryCount;

type ApiReturnType = Awaited<ReturnType<typeof getTasks>>;
type QueryData = {
  tasks: ApiReturnType;
  taskTypes: string[];
  usernames: string[];
};
interface Options<TData>
  extends Omit<
    UseQueryOptions<QueryData, unknown, TData, string[]>,
    'queryKey' | 'queryFn' | 'select'
  > {
  select?: (data: QueryData) => TData;
  jobberId?: number;
}

const useFetchTasks = <T = QueryData>({
  jobberId,
  ...options
}: Options<T> = {}) => {
  const { data: token } = useAuth({ select: (data) => data.token });
  if (!token) {
    throw new Error('Auth token not found');
  }
  const query = useQuery({
    queryKey: QueryKeyGenerator.Tasks(),
    queryFn: async () => {
      const response = await getTasks({ jobberId: jobberId, authToken: token });
      const usernameSet = new Set<string>();
      response.forEach((task) => {
        usernameSet.add(task.jobber.name);
      });
      const typeSet = new Set<string>();
      response.forEach((task) => {
        typeSet.add(task.type);
      });
      return {
        tasks: response,
        taskTypes: Array.from(typeSet),
        usernames: Array.from(usernameSet),
      };
    },
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    retry: REQUEST_RETRY_COUNT,
    staleTime: Infinity,
    ...options,
  });

  return query;
};

export default useFetchTasks;
export { QueryData as FetchTasksQueryData };
