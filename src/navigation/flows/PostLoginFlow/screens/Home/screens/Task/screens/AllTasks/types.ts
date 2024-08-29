import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TaskScreenStackParamList } from '../../types';

export type Props = NativeStackScreenProps<
  TaskScreenStackParamList,
  'AllTasks'
>;

export type AllTasksNavigationProp = Props['navigation'];

export type RenderFilterFn = ({
  item,
  type,
}: {
  item: string;
  type: FilterType;
}) => React.JSX.Element;
export type FilterType = 'task' | 'user';