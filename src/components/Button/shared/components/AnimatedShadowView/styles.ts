import { StyleSheet } from 'react-native';

import { borderRadii, colors } from '@foundation';

const styles = StyleSheet.create({
  brightOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderTopEndRadius: borderRadii.zero,
    borderTopLeftRadius: borderRadii.zero,
    borderTopRightRadius: borderRadii.zero,
    borderTopStartRadius: borderRadii.zero,
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.common.black,
    opacity: 0.12,
  },
  wrapper: { overflow: 'hidden' },
});

export default styles;
