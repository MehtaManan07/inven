import { RawMaterial, Category } from '@types';
import { BaseResponse } from '../types';

export interface GetRawMaterialsResponse extends BaseResponse {
  count: number;
  data: RawMaterial[];
}

export interface CreateRawMaterialResponse extends BaseResponse {
  count: number;
  data: RawMaterial;
}

export interface GetCategoriesResponse extends BaseResponse {
  count: number;
  data: Category[];
}

export interface GetRawMaterialsRequest {
  name?: string;
}
export interface GetCategoryRequest {
  name?: string;
}
export type CreateRawMaterialDto = {
  name: string;
  size: string;
  categories: string[];
  color: string;
  availableUnits: number;
  weightPerUnit: number;
  parentCategory: string;
  totalWeight?: number;
};

export type CreateRawMaterialPayload = {
  data: CreateRawMaterialDto;
};
