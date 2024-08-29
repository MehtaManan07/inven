import type { ColorValue, TextStyle, ViewStyle } from 'react-native';

import type { StyledTextProps } from '../StyledText';
import type { typographyShadows } from '@foundation';

export interface Props extends StyledTextProps {
  outlineColor?: ColorValue;
  outlineThickness?: number;
  shadowVariant?: keyof typeof typographyShadows;
  style?: TextStyle;
  wrapperStyle?: ViewStyle;
}
