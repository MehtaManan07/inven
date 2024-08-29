import type { ReactNode } from 'react';
import type { TextInputProps, ViewStyle } from 'react-native';

import variants from '../variants';

type ModifiedTextInputProps = Omit<
  TextInputProps,
  'editable' | 'placeholderTextColor'
>;

export interface Props extends ModifiedTextInputProps {
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  isInvalid?: boolean;
  style?: ViewStyle;
  variant?: keyof typeof variants;
}
