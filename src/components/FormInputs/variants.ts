import { colors } from '@foundation';

type State = 'default' | 'focused' | 'invalid';
type StateColors = {
  backgroundColor: string;
  borderColor: string;
  color: string;
  placeholderColor: string;
};

const variants = {
  experimental: {
    default: {
      backgroundColor: colors.common.white,
      borderColor: colors.divider.dividerBlueDiv,
      color: colors.typography.vampireBlack,
      placeholderColor: colors.typography.tDisabled,
    },
    focused: {
      backgroundColor: colors.primary.blueShadesBlue_10,
      borderColor: colors.primary.yaleBlue,
      color: colors.typography.vampireBlack,
      placeholderColor: colors.typography.tDisabled,
    },
    invalid: {
      backgroundColor: colors.common.white,
      borderColor: colors.semantics.cinnamonRed,
      color: colors.typography.vampireBlack,
      placeholderColor: colors.typography.tDisabled,
    },
  },
} satisfies Record<string, Record<State, StateColors>>;

export default variants;
export type { State, StateColors };
