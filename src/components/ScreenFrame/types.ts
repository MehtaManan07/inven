import type { ReactNode } from 'react';

export interface Props {
  children?: ReactNode;
  color?: string;
  shouldCloseKeyboard?: boolean;
}
