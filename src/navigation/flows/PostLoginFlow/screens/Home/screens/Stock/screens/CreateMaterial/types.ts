import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StockScreenStackParamList } from '../../types';

export type Props = NativeStackScreenProps<
  StockScreenStackParamList,
  'CreateMaterial'
>;

export type CreateCategoryNavigationProp = Props['navigation'];

export type IForm = {
  name: string;
  size: string;
  weightPerUnit: string;
  availableUnits: string;
  color: string;
  subCategory: string;
};
