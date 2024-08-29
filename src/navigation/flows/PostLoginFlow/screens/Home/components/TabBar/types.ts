import type { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs';
import type {
  NavigationHelpers,
  TabNavigationState,
} from '@react-navigation/native';

import type { HomeScreenTabParamList } from '../../types';

/**
 * The `BottomTabBarProps` interface is not generic and flexible to accomodate the route
 * names and their params defined in the tab navigator's param list type (in this case,
 * `HomeScreenTabParamList`). For those reasons, the `Props` interface is created as a
 * replica of the `BottomTabBarProps` interface to not compromise type-safety.
 */
export interface Props {
  state: TabNavigationState<HomeScreenTabParamList>;
  navigation: NavigationHelpers<
    HomeScreenTabParamList,
    BottomTabNavigationEventMap
  >;
}

export interface TabBarIconProps {
  isActive: boolean;
}
