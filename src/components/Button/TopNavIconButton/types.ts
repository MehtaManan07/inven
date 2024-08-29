import { ReactNode } from 'react';
import { AccessibilityProps } from 'react-native';
import type colorSchemes from './colorSchemes';

type ColorScheme = keyof typeof colorSchemes;

type ButtonSize = 'lg' | 'md' | 'sm';

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

export type { Props, ButtonSize };
