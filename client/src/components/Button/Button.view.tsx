import { ReactNode } from 'react';
import { BaseButton } from './Button.styles';
import customTheme from './theme';

export type variants = 'primary' | 'secondary' | 'empty' | 'delete';

export interface ButtonViewProps {
  variant: variants;
  disabled?: boolean;
  children: ReactNode;
}

const ButtonView = ({ children, ...props }: ButtonViewProps) => {
  return (
    <BaseButton customTheme={customTheme} {...props}>
      {children}
    </BaseButton>
  );
};

export default ButtonView;
