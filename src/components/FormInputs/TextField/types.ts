import type { TextInputProps } from '../TextInput';

export interface Props extends TextInputProps {
  label?: string;
  invalidFeedbackText?: string;
}
