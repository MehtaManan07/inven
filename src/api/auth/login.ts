import { fetcher, getHeaders } from '../utils';
import * as Types from './types';

export const loginUser = async (payload: Types.LoginPayload) => {
  const response = await fetcher<Types.LoginResponse>('/auth/login', {
    body: JSON.stringify(payload),
    method: 'POST',
    headers: getHeaders(),
  });
  return response;
};
