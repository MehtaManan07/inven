import { colors } from '@foundation';

export type ColorSchemeColors = {
  backgroundGradientColor: string[];
  contentColor: string;
  disabledContentColor?: string;
  disabledBackgroundColor: string;
  loaderColor: string;
  disabledLoaderColor: string;
};
const colorSchemes = {
  blue: {
    backgroundGradientColor: [
      colors.primary.yaleBlue,
      colors.primary.yaleBlue,
    ] as string[],
    contentColor: colors.common.white,
    disabledContentColor: colors.typography.blueDisabled,
    disabledBackgroundColor: colors.primary.blueShadesBlue_10,
    loaderColor: colors.common.white,
    disabledLoaderColor: colors.primary.yaleBlue,
  },
  offWhite: {
    backgroundGradientColor: [
      colors.common.white,
      colors.common.white,
    ] as string[],
    contentColor: colors.common.black,
    disabledContentColor: colors.typography.tDisabled,
    disabledBackgroundColor: '#D6DCE1',
    disabledLoaderColor: colors.primary.yaleBlue,
    loaderColor: colors.primary.yaleBlue,
  },
} as const satisfies Record<string, ColorSchemeColors>;

export default colorSchemes;
