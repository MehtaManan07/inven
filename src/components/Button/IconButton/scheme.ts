import { colors, gradients } from '@foundation';

export type ColorSchemeColors = {
  backgroundGradientColor: string[];
  contentColor: string;
  disabledContentColor?: string;
  disabledBackgroundColor: string;
  loaderColor: string;
  disabledLoaderColor: string;
};
const colorSchemes = {
  darkblue: {
    backgroundGradientColor: gradients.darkBlue,
    contentColor: colors.monoVariants.chillGrey_1,
    disabledContentColor: colors.typography.blueDisabled,
    disabledBackgroundColor: colors.primary.blueShadesBlue_10,
    loaderColor: colors.common.white,
    disabledLoaderColor: colors.primary.yaleBlue,
  },
  blue: {
    backgroundGradientColor: [colors.primary.yaleBlue, colors.primary.yaleBlue],
    contentColor: colors.monoVariants.chillGrey_1,
    disabledContentColor: colors.typography.blueDisabled,
    disabledBackgroundColor: colors.primary.blueShadesBlue_10,
    loaderColor: colors.common.white,
    disabledLoaderColor: colors.primary.yaleBlue,
  },
  red: {
    backgroundGradientColor: [
      colors.semantics.cinnamonRed,
      colors.semantics.cinnamonRed,
    ],
    contentColor: colors.typography.typoWhite,
    disabledContentColor: colors.typography.tDisabled,
    disabledBackgroundColor: colors.semantics.cinnamonRed,
    loaderColor: colors.common.white,
    disabledLoaderColor: colors.typography.typoWhite,
  },
  green: {
    backgroundGradientColor: [
      colors.background.tidalGreen,
      colors.background.tidalGreen,
    ],
    contentColor: colors.typography.vampireBlack,
    disabledContentColor: colors.typography.tDisabled,
    disabledBackgroundColor: colors.background.tidalGreen,
    loaderColor: colors.common.white,
    disabledLoaderColor: colors.primary.yaleBlue,
  },
  white: {
    backgroundGradientColor: [
      colors.common.white,
      colors.common.white,
    ] as string[],
    contentColor: colors.common.white,
    disabledContentColor: '#D6DCE1',
    disabledBackgroundColor: colors.typography.tDisabled,
    loaderColor: colors.common.white,
    disabledLoaderColor: colors.primary.yaleBlue,
  },
} as const satisfies Record<string, ColorSchemeColors>;

export default colorSchemes;
