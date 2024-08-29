import type { ReactNode } from 'react';
import type { AccessibilityProps } from 'react-native';

import type colorSchemes from './scheme';

type ColorScheme = keyof typeof colorSchemes;
type ButtonSize = 'xl' | 'lg' | 'md' | 'sm';

interface Props extends AccessibilityProps {
  colorScheme?: ColorScheme;
  icon: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  size?: ButtonSize;
  testID?: string;
  onPress?: () => void;
  showShadow?: boolean;
}

export type ButtonBackgroundProps = {
  children: ReactNode;
  gradientColors: string[];
  disabledColor: string;
  isDisabled: boolean;
  size: ButtonSize;
};

export type { Props, ButtonSize };
