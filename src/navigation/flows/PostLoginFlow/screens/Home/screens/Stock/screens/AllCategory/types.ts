import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StockScreenStackParamList } from '../../types';

export type Props = NativeStackScreenProps<
  StockScreenStackParamList,
  'AllCategory'
>;

export type AllCategoryNavigationProp = Props['navigation'];
