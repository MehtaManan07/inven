import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StockScreenStackParamList } from '../../types';

export type Props = NativeStackScreenProps<
  StockScreenStackParamList,
  'Category'
>;

export type CategoryNavigationProp = Props['navigation'];
export type FilterType = 'color' | 'size';
export type RenderFilterFn = ({
  item,
  type,
}: {
  item: string;
  type: FilterType;
}) => React.JSX.Element;
