import colors from './colors';

const innerShadows = {
  zero: {
    x: 0,
    y: 0,
    color: colors.typography.vampireBlack,
  },
  xs: {
    x: 2,
    y: 4,
    color: colors.typography.vampireBlack,
  },
  sm: {
    x: 3,
    y: 5,
    color: colors.typography.vampireBlack,
  },
  md: {
    x: 0,
    y: 8,
    color: colors.typography.vampireBlack,
  },
  lg: {
    x: 0,
    y: 10,
    color: colors.typography.vampireBlack,
  },
} as const;

const outerShadows = {
  sm: {
    x: 1.2,
    y: 1.2,
    color: colors.typography.vampireBlack,
    opacity: 1,
    blur: 0,
  },
  lg: {
    x: 2,
    y: 2,
    color: colors.typography.vampireBlack,
    opacity: 1,
    blur: 0,
  },
  popUpCards: {
    x: 4,
    y: 4,
    color: colors.typography.vampireBlack,
    opacity: 0.2,
    blur: 0,
  },
  cardInsideContainer: {
    x: 0,
    y: 0,
    color: colors.common.black,
    opacity: 0.36,
    blur: 2,
  },
  none: {
    x: 0,
    y: 0,
    color: colors.common.transparent,
    opacity: 0,
    blur: 2,
  },
} as const;

const typographyShadows = {
  sm: {
    x: 1,
    y: 1,
    color: colors.typography.vampireBlack,
  },
  lg: {
    x: 2,
    y: 2,
    color: colors.typography.vampireBlack,
  },
} as const;

export { innerShadows, outerShadows, typographyShadows };
