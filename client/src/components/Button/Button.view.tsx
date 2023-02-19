import { ReactNode } from 'react';
import customTheme from './theme';

import { BaseButton, BaseButtonProps } from './Button.styles';

export interface ButtonViewProps extends Omit<BaseButtonProps, 'customTheme'> {
  children: ReactNode;
}

export const ButtonView = ({ children, ...props }: ButtonViewProps) => {
  return (
    <BaseButton customTheme={customTheme} {...props}>
      {children}
    </BaseButton>
  );
};
