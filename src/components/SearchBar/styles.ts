import { StyleSheet } from 'react-native';

import { borderRadii, colors, dimensions, textVariants } from '@foundation';

const textVariant = textVariants['b1-m'];

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontFamily: textVariant.fontFamily,
    fontSize: textVariant.fontSize,
    letterSpacing: textVariant.letterSpacing,
    overflow: 'visible',
  },
  inputWrapper: {
    alignItems: 'center',
    backgroundColor: colors.primary.blueShadesBlue_10,
    flex: 1,
    flexDirection: 'row',
    gap: dimensions[2],
  },
  wrapper: {
    alignItems: 'center',
    borderRadius: borderRadii.xl,
    flex: 1,
    flexDirection: 'row',
    gap: dimensions[2],
    height: dimensions[11],
    justifyContent: 'center',
    maxHeight: dimensions[11],
    minHeight: dimensions[11],
    paddingHorizontal: dimensions[3],
  },
});

export default styles;
