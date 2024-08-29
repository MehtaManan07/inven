import { colors } from '@foundation';

const disabledBorderColor = '#92CCF3';
const colorSchemes = {
  white: {
    backgroundColor: colors.common.white,
    contentColor: colors.typography.vampireBlack,
    disabledBackgroundColor: colors.common.white,
    pressedBackgroundColor: colors.common.white,
    disabledBorderColor: disabledBorderColor,
  },
} as const;

export default colorSchemes;
