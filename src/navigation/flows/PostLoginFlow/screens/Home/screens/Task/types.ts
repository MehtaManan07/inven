import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { HomeScreenTabParamList } from '../../types';
import { PostLoginFlowStackParamList } from '@navigation/flows/PostLoginFlow/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type Props = CompositeScreenProps<
  BottomTabScreenProps<HomeScreenTabParamList, 'Task'>,
  NativeStackScreenProps<PostLoginFlowStackParamList>
>;

export type NavigationProp = Props['navigation'];

export type TaskScreenStackParamList = {
  CreateTask: undefined;
  AllTasks: undefined;
};
