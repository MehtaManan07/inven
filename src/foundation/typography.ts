const GTMaruFont = {
  Regular: "GT-Maru-Regular",
  Medium: "GT-Maru-Medium",
  Bold: "GT-Maru-Bold",
  Black: "GT-Maru-Black",
  Italic: "GT-Maru-Medium-Oblique",
} as const;

type GTMaruFontWeight = keyof typeof GTMaruFont;

interface Typeface {
  fontSize: number;
  fontFamily: (typeof GTMaruFont)[GTMaruFontWeight];
  letterSpacing: number;
  lineHeight: number;
}

const textVariants = {
  h1: {
    fontSize: 24,
    fontFamily: GTMaruFont.Bold,
    letterSpacing: 0,
    lineHeight: 34,
  },
  "h1-pro": {
    fontSize: 24,
    fontFamily: GTMaruFont.Black,
    letterSpacing: 0.4,
    lineHeight: 34,
  },
  h2: {
    fontSize: 20,
    fontFamily: GTMaruFont.Bold,
    letterSpacing: 0,
    lineHeight: 28,
  },
  "h2-pro": {
    fontSize: 20,
    fontFamily: GTMaruFont.Black,
    letterSpacing: 0.4,
    lineHeight: 28,
  },
  h3: {
    fontSize: 17,
    fontFamily: GTMaruFont.Bold,
    letterSpacing: 0,
    lineHeight: 24,
  },
  "h3-pro": {
    fontSize: 17,
    fontFamily: GTMaruFont.Black,
    letterSpacing: 0.4,
    lineHeight: 24,
  },
  h4: {
    fontSize: 14,
    fontFamily: GTMaruFont.Bold,
    letterSpacing: 0,
    lineHeight: 20,
  },
  "b-ultra": {
    fontSize: 17,
    fontFamily: GTMaruFont.Medium,
    letterSpacing: 0,
    lineHeight: 23,
  },
  "b1-m": {
    fontSize: 14,
    fontFamily: GTMaruFont.Medium,
    letterSpacing: 0,
    lineHeight: 19,
  },
  b1: {
    fontSize: 14,
    fontFamily: GTMaruFont.Regular,
    letterSpacing: 0,
    lineHeight: 19,
  },
  "b2-m": {
    fontSize: 12,
    fontFamily: GTMaruFont.Medium,
    letterSpacing: 0,
    lineHeight: 17,
  },
  "b2-b": {
    fontSize: 12,
    fontFamily: GTMaruFont.Bold,
    letterSpacing: 0,
    lineHeight: 17,
  },
  b2: {
    fontSize: 12,
    fontFamily: GTMaruFont.Regular,
    letterSpacing: 0,
    lineHeight: 17,
  },
  "c1-m": {
    fontSize: 10,
    fontFamily: GTMaruFont.Medium,
    letterSpacing: 0,
    lineHeight: 14,
  },
  c1: {
    fontSize: 10,
    fontFamily: GTMaruFont.Regular,
    letterSpacing: 0,
    lineHeight: 14,
  },
  "c2-m": {
    fontSize: 8,
    fontFamily: GTMaruFont.Medium,
    letterSpacing: 0,
    lineHeight: 12,
  },
  "h-ultra": {
    fontSize: 28,
    fontFamily: GTMaruFont.Black,

    letterSpacing: 0,
    lineHeight: 40,
  },
} as const satisfies Record<string, Typeface>;

export { textVariants, GTMaruFont, GTMaruFontWeight, Typeface };
