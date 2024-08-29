import { fetcher, getHeaders } from '../utils';
import * as Types from './types';

const PATH = '/tasks';

export const getTasks = async (params: Types.FetchTasksPayload) => {
  const jobberId = params.jobberId;
  const hasJobberId = jobberId !== undefined;
  let path = PATH;
  if (hasJobberId) {
    path = `${PATH}?jobberId=${jobberId}`;
  }
  const headers = getHeaders({ authToken: params.authToken });
  const { data } = await fetcher<Types.FetchTasksResponse>(path, {
    headers: headers,
  });
  return data;
};

export const createTask = async (params: Types.CreateTaskPayload) => {
  const payload = params.payload;
  const headers = getHeaders({ authToken: params.authToken });
  const { data } = await fetcher<Types.CreateTaskResponse>(`${PATH}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ status: 'in progress', ...payload }),
  });
  return data;
};
