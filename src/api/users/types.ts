import { UserRole, User } from '@types';
import { BaseResponse, BasePayload } from '../types';

export type GetUsersByRolePayload = BasePayload & {
  roles: UserRole[];
};

export type GetUsersByRoleResponse = BaseResponse & {
  count: number;
  data: User[];
};
