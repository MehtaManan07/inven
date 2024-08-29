import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TaskScreenStackParamList } from '../../types';

export type Props = NativeStackScreenProps<
  TaskScreenStackParamList,
  'CreateTask'
>;

export type CreateTaskNavigationProp = Props['navigation'];

export type IForm = {
  type: string;
  description: string;
  jobberId: number;
  rawMaterialQuantities: {
    materialId: string;
    quantityUsed: string;
    label: string;
  }[];
};
