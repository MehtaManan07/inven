import { fetcher, getHeaders } from '../utils';
import * as Types from './types';

const PATH = '/users';

export const getUsersByRole = async (params: Types.GetUsersByRolePayload) => {
  const roles = params.roles.join(',');
  const headers = getHeaders({ authToken: params.authToken });
  const { data } = await fetcher<Types.GetUsersByRoleResponse>(
    `${PATH}/roles?roles=${roles}`,
    { headers: headers }
  );
  return data;
};
