
import { PostLoginFlowStackParamList } from '@navigation/flows/PostLoginFlow/types';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { HomeScreenTabParamList } from '../../types';

export type Props = CompositeScreenProps<
  BottomTabScreenProps<HomeScreenTabParamList, 'Stock'>,
  NativeStackScreenProps<PostLoginFlowStackParamList>
>;

export type NavigationProp = Props['navigation'];

export type StockScreenStackParamList = {
  AllCategory: undefined;
  Category: {
    item: number;
  };
  CreateMaterial: {
    category: string;
  }
};
