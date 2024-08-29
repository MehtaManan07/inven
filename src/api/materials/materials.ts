import { fetcher, getHeaders } from '../utils';
import * as Types from './types';

const PATH = '/raw-materials';

export const getRawMaterials = async ({
  name,
}: Types.GetRawMaterialsRequest) => {
  const { data } = await fetcher<Types.GetRawMaterialsResponse>(
    `${PATH}?name=${name ?? ''}`,
    {
      method: 'GET',
    }
  );
  return { data };
};

export const fetchCategories = async ({ name }: Types.GetCategoryRequest) => {
  const { data } = await fetcher<Types.GetCategoriesResponse>(
    `${PATH}/category?name=${name ?? ''}`,
    {
      method: 'GET',
    }
  );
  return data;
};

export const createRawMaterial = async ({
  data: payload,
}: Types.CreateRawMaterialPayload) => {
  const { data } = await fetcher<Types.CreateRawMaterialResponse>(`${PATH}`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: getHeaders(),
  });
  return data;
};
