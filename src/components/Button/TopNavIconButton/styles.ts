import { StyleSheet } from 'react-native';

import { borderRadii, borderWidths, colors, dimensions } from '@foundation';

const styles = StyleSheet.create({
  lgShadowView: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  lgWrapper: { height: dimensions[10] },
  mdShadowView: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  mdWrapper: {
    borderColor: colors.divider.dividerBlueDiv,
    borderRadius: borderRadii.full,
    borderWidth: borderWidths.normal,
    height: dimensions[9],
  },
  smShadowView: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  smWrapper: {
    borderColor: colors.divider.dividerBlueDiv,
    borderRadius: borderRadii.full,
    borderWidth: borderWidths.normal,
    height: dimensions[6],
  },
  wrapper: {
    alignItems: 'center',
    aspectRatio: 1 / 1,
    height: dimensions[10],
    justifyContent: 'center',
  },
});

export default styles;
