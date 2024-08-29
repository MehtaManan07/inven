import type { ReactNode } from 'react';
import { Platform, TextStyle, View } from 'react-native';

import StyledText from '../StyledText';

import styles from './styles';
import { colors, stroke, typographyShadows } from '@foundation';

import type { Props } from './types';

const TOTAL_OUTLINE_DIRECTIONS = 12;

const OutlinedText = ({
  children,
  style,
  shadowVariant,
  wrapperStyle,
  outlineThickness = stroke.lg,
  outlineColor = colors.common.black,
  variant = 'h2-pro',
  ...props
}: Props) => {
  const outlines: ReactNode[] = [];
  let shadowStyles: Pick<
    TextStyle,
    'textShadowColor' | 'textShadowOffset' | 'textShadowRadius'
  > | null = null;
  if (shadowVariant) {
    const shadowAttributes = typographyShadows[shadowVariant];
    shadowStyles = {
      textShadowColor: shadowAttributes.color,
      textShadowRadius: Platform.select({
        ios: 0,
        android: 0.0001,
      }),
      textShadowOffset: {
        height: shadowAttributes.y,
        width: shadowAttributes.x,
      },
    };
  }

  for (let i = 0; i < TOTAL_OUTLINE_DIRECTIONS; i++) {
    const xOffset =
      outlineThickness * Math.sin((i * 2 * Math.PI) / TOTAL_OUTLINE_DIRECTIONS);
    const yOffset =
      outlineThickness * Math.cos((i * 2 * Math.PI) / TOTAL_OUTLINE_DIRECTIONS);

    const outlineStyle: TextStyle = {
      ...style,
      ...shadowStyles,
      ...styles.outline,
      color: outlineColor,
      transform: [{ translateX: xOffset }, { translateY: yOffset }],
    };

    outlines.push(
      <StyledText
        key={i}
        selectable={false}
        style={outlineStyle}
        variant={variant}
        {...props}
      >
        {children}
      </StyledText>
    );
  }

  const textStyle = {
    ...styles.contentColorStyles,
    ...style,
  };

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      {outlines}
      <StyledText style={textStyle} variant={variant} {...props}>
        {children}
      </StyledText>
    </View>
  );
};

export default OutlinedText;
