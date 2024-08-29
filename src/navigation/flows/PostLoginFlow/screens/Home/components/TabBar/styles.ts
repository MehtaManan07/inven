import { StyleSheet } from 'react-native';

import { colors, dimensions } from '@foundation';

const BUTTON_HEIGHT = dimensions[13];

const styles = StyleSheet.create({
  iconButton: {
    alignItems: 'center',
    aspectRatio: 4 / 3,
    height: '100%',
    justifyContent: 'center',
  },
  iconsWrapper: {
    alignItems: 'baseline',
    flexDirection: 'row',
    height: BUTTON_HEIGHT,
    justifyContent: 'space-around',
  },
  selectedButton: {
    bottom: 80,
  },
  tabBar: {
    backgroundColor: colors.background.tidalGreen,
    paddingTop: dimensions[0.5],
    zIndex: 0,
  },
});

export default styles;
