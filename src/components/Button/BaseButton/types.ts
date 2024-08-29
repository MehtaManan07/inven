import type { ReactNode } from 'react';
import type { AccessibilityProps, ColorValue } from 'react-native';

type ButtonSize = 'sm' | 'md' | 'lg' | 'xs';

interface BaseProps extends AccessibilityProps {
  icon?: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  label: string;
  size?: ButtonSize;
  testID?: string;
  onPress?: () => void;
  variant?: 'blue' | 'offWhite';
  iconPosition?: 'right' | 'left';
  textColor?: ColorValue;
}

interface NoCustomColorButtonProps extends BaseProps {
  backgroundColor?: null;
  disabledBackgroundColor?: null;
  pressedBackgroundColor?: null;
}

interface CustomColorButtonProps extends BaseProps {
  backgroundColor: ColorValue;
  disabledBackgroundColor: ColorValue;

  pressedBackgroundColor: ColorValue;
}

export type ButtonBackgroundProps = {
  children: ReactNode;
  gradientColors: string[];
  disabledColor: string;
  isDisabled: boolean;
  size: 'sm' | 'md' | 'lg' | 'xs';
};

export type Props = NoCustomColorButtonProps | CustomColorButtonProps;
