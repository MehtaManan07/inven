import type { TextInputProps } from 'react-native';
import { SharedValue } from 'react-native-reanimated';

export type Props = Omit<
  TextInputProps,
  'blurOnSubmit' | 'placeholderColor' | 'style'
> & {
  disabled?: boolean;
};

export interface TextInputWithCrossProps extends Props {
  onCrossPress: () => void;
  focusAnimation: SharedValue<number>;
}

export interface TextInputRef {
  blur: () => void;
  clear: () => void;
  focus: () => void;
}

export type SearchBarRef = TextInputRef;
