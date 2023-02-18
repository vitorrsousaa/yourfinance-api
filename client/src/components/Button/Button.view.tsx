import { ReactNode } from 'react';
import { BaseButton, BaseButtonProps } from './Button.styles';
import customTheme from './theme';

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
