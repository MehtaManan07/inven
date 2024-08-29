import type { ReactNode } from 'react';
import type { ViewProps, ViewStyle } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';

export interface Props extends ViewProps {
  backgroundColor: SharedValue<string>;
  borderColor: SharedValue<string>;
  borderRadius: number;
  children?: ReactNode;
  shadowOffset: SharedValue<{ x: number; y: number }>;
  style?: Omit<ViewStyle, 'backgroundColor' | 'borderColor' | 'borderRadius'>;
}
