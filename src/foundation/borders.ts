const borderRadii = {
  zero: 0,
  '2xs': 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  full: 9999,
} as const;

const borderStyles = {
  solid: 'solid',
  dashed: 'dashed',
} as const;

const borderWidths = {
  zero: 0,
  thinner: 0.4,
  thin: 0.8,
  normal: 1.2,
  medium: 1.4,
  thick: 1.6,
  thicker: 2,
  thickest: 2.4,
} as const;

export { borderRadii, borderStyles, borderWidths };
