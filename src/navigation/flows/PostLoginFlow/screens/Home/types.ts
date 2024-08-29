import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { PostLoginFlowStackParamList } from '../../types';

const HomeScreenRoutes = [
  'Transaction',
  'Task',
  'Dashboard',
  'Stock',
  'Staff',
] as const;
type HomeScreenRoute = typeof HomeScreenRoutes[number];

type HomeScreenTabParamList = {
  Transaction: undefined;
  Task: undefined;
  Dashboard: undefined;
  Stock: undefined;
  Staff: undefined;
};

type Props = NativeStackScreenProps<PostLoginFlowStackParamList, 'Home'>;
export { HomeScreenRoute, HomeScreenRoutes, HomeScreenTabParamList, Props };
