import { forwardRef } from 'react';
import { Text } from 'react-native';

import styles from './styles';
import { textVariants } from '@foundation';

import type { Props } from './types';

const StyledText = forwardRef<Text, Props>(
  ({ children, style, variant = 'b1-m', color, ...props }, ref) => {
    const fontStyle = textVariants[variant];

    return (
      <Text
        ref={ref}
        style={[styles.text, fontStyle, style, color ? { color } : null]}
        {...props}
        allowFontScaling={false}
      >
        {children}
      </Text>
    );
  }
);

export default StyledText;
