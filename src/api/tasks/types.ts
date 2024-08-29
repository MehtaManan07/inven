import { Task } from '@types';
import { BaseResponse, BasePayload } from '../types';

export interface TaskToMaterial {
  id: number;
  rawMaterial: { id: number; name: string };
  taskId: number;
  quantityUsed: number;
}

export interface FetchTasksResponse extends BaseResponse {
  count: number;
  data: MultiTask[];
}

export interface MultiTask {
  id: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  jobber: { id: number; name: string };
  type: string;
  taskToMaterials: TaskToMaterial[];
}
export type CreateTaskPayload = BasePayload & {
  payload: CreateTaskDto;
};

export type FetchTasksPayload = BasePayload & {
  jobberId?: number;
};

export type CreateTaskResponse = BaseResponse & {
  data: Task;
};

export type CreateTaskDto = {
  type: string;
  jobberId: number;
  description: string;
  rawMaterialQuantities: {
    materialId: number;
    quantityUsed: number;
  }[];
};
