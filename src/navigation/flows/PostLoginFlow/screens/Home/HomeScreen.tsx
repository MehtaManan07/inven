import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { TabBar, TabBarProps } from './components';

import {
  DashboardScreen,
  StaffScreen,
  StockScreen,
  TaskScreen,
  TransactionScreen,
} from './screens';
import styles from './styles';
import { HomeScreenTabParamList } from './types';
import { ScreenFrame } from '@components';
import { useFetchCategories } from '@hooks';

const HomeScreenTabs = createBottomTabNavigator<HomeScreenTabParamList>();

const tabBarOptions: BottomTabNavigationOptions = {
  headerShown: false,
  freezeOnBlur: true,
  tabBarHideOnKeyboard: true,
};

const HomeScreen = () => {
  useFetchCategories();
  return (
    <ScreenFrame>
      <HomeScreenTabs.Navigator
        initialRouteName="Dashboard"
        sceneContainerStyle={styles.wrapper}
        screenOptions={tabBarOptions}
        tabBar={(props) => <TabBar {...(props as unknown as TabBarProps)} />}
      >
        <HomeScreenTabs.Screen
          component={TransactionScreen}
          name="Transaction"
        />
        <HomeScreenTabs.Screen component={StockScreen} name="Stock" />
        <HomeScreenTabs.Screen component={DashboardScreen} name="Dashboard" />
        <HomeScreenTabs.Screen component={TaskScreen} name="Task" />
        <HomeScreenTabs.Screen component={StaffScreen} name="Staff" />
      </HomeScreenTabs.Navigator>
    </ScreenFrame>
  );
};

export default HomeScreen;
