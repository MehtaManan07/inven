import type { Ref } from 'react';
import type { ColorValue, Text, TextProps } from 'react-native';

import type { textVariants } from '@foundation';

export interface Props extends TextProps {
  variant?: keyof typeof textVariants;
  color?: ColorValue;
}

export interface AnimatedStyledTextProps extends Props {
  textRef?: Ref<Text>;
}
