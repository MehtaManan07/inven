import { FC } from 'react';
import { Platform, Pressable, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './styles';
import { colors, dimensions } from '@foundation';

import type { Props, TabBarIconProps } from './types';
import type { HomeScreenRoute } from '../../types';
import {
  DashboardIcon,
  TransactionIcon,
  InventoryIcon,
  StaffIcon,
  TaskIcon,
} from '@components/Icons';
import { StyledText } from '@components';

const pathIconMap: Record<HomeScreenRoute, FC<TabBarIconProps>> = {
  Dashboard: ({ isActive }) => (
    <DashboardIcon
      color={isActive ? colors.semantics.cinnamonRed : colors.common.black}
      size={24}
    />
  ),
  Transaction: ({ isActive }) => (
    <TransactionIcon
      color={isActive ? colors.semantics.cinnamonRed : colors.common.black}
      size={24}
    />
  ),
  Stock: ({ isActive }) => (
    <InventoryIcon
      color={isActive ? colors.semantics.cinnamonRed : colors.common.black}
      size={24}
    />
  ),
  Staff: ({ isActive }) => (
    <StaffIcon
      color={isActive ? colors.semantics.cinnamonRed : colors.common.black}
      size={24}
    />
  ),
  Task: ({ isActive }) => (
    <TaskIcon
      color={isActive ? colors.semantics.cinnamonRed : colors.common.black}
      size={24}
    />
  ),
} as const;

const BUTTON_HEIGHT = dimensions[8];

const TabBar = ({ navigation, state }: Props) => {
  const { bottom } = useSafeAreaInsets();
  const footerStyle: ViewStyle = {
    ...styles.tabBar,
    paddingBottom: Math.max(
      0,
      Math.max(
        bottom,
        Platform.select({
          android: dimensions[6],
          ios: dimensions[8],
          default: dimensions[6],
        })
      ) -
        BUTTON_HEIGHT / 2
    ),
  };

  const renderedTabIcons = state.routes.map((route, index) => {
    const isActive = state.index === index;

    const openTab = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isActive && !event.defaultPrevented) {
        /**
         * The `merge: true` option makes sure that the params inside the tab screen are
         * preserved.
         */
        navigation.navigate({
          name: route.name,
          merge: true,
          params: undefined,
        });
      }
    };

    const longPressHandler = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    };

    const IconComponent = pathIconMap[route.name];

    return (
      <Pressable
        key={route.name}
        style={[styles.iconButton, null]}
        onLongPress={longPressHandler}
        onPress={openTab}
      >
        <IconComponent isActive={isActive} />
        <StyledText variant="c1-m">{route.name}</StyledText>
      </Pressable>
    );
  });

  return (
    <View style={footerStyle}>
      <View style={styles.iconsWrapper}>{renderedTabIcons}</View>
    </View>
  );
};

export default TabBar;
