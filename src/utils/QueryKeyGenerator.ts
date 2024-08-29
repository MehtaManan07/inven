import { UserRole } from '@types';

const QueryKeyGenerator = {
  Auth: () => ['auth'],
  RawMaterials: () => ['raw-materials'],
  UserRoles: (roles: UserRole[]) => ['raw-materials', roles.join('-')],
  Categories: () => ['categories'],
  Tasks: () => ['tasks'],
} as const;

export default QueryKeyGenerator;
