export type UserRole = 'ADMIN' | 'JOBBER' | 'MANAGER';

export type User = {
  id: number;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  username: string;
  name: string;
  role: UserRole;
  contactInfo: string;
};
