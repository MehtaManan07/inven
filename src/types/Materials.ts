export interface RawMaterial {
  id: number
  createdAt: string
  updatedAt: string
  isDeleted: boolean
  name: string
  availableUnits: number
  size: string
  categories: string[]
  weightPerUnit: number
  totalWeight: number
  slug: string
  color: string
}

export interface Category {
  id: number;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  name: string;
  rawMaterials: RawMaterial[];
}
