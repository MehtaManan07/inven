import { Platform, StyleSheet } from 'react-native';

import { convertBase100ToHex } from '@utils';

import { borderRadii, colors, dimensions, textVariants } from '@foundation';

const styles = StyleSheet.create({
  experimentalWrapper: {
    shadowColor: colors.common.black + convertBase100ToHex(12),
    shadowOpacity: 1,
    shadowRadius: 8,
  },
  input: {
    ...textVariants.b1,
    alignItems: 'center',
    backgroundColor: colors.common.transparent,
    flex: 1,
    justifyContent: 'center',
    lineHeight: textVariants.b1.fontSize + dimensions[0.5],
    padding: 0,
    textAlignVertical: 'center',
    ...(Platform.OS === 'web' && { outlineWidth: 0 }),
  },
  wrapper: {
    alignItems: 'stretch',
    borderRadius: borderRadii.xs,
    gap: dimensions[3],
    height: dimensions[11],
    justifyContent: 'center',
    paddingHorizontal: dimensions[4],
  },
});

export default styles;
