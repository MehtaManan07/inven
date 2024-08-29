import { Platform, StyleSheet } from 'react-native';

import { colors } from '@foundation';

const styles = StyleSheet.create({
  contentColorStyles: { color: colors.common.white },
  outline: {
    position: 'absolute',
    zIndex: Platform.select({ android: 0, ios: -1 }),
  },
  wrapper: { position: 'relative' },
});

export default styles;
