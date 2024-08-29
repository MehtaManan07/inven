import { TextInput } from "react-native";

export type Props = {
  data: string[];
  onSelect: (value: string) => void;
  size: 'sm' | 'lg';
  allowCustom?: boolean;
  placeholder?: string;
  value?: string;
  textRef?: React.RefObject<TextInput>;
};

export type SelectRef = {
  isValid: boolean;
};
