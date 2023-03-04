import { ReactNode } from 'react';
import { Spinner } from '../Spinner';

import customTheme from './theme';

import { BaseButton, BaseButtonProps } from './Button.styles';

export interface ButtonViewProps extends Omit<BaseButtonProps, 'customTheme'> {
  children: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
}

export const ButtonView = ({
  children,
  isLoading,
  disabled,
  ...props
}: ButtonViewProps) => {
  return (
    <BaseButton
      customTheme={customTheme}
      disabled={disabled || isLoading}
      {...props}
    >
      {!isLoading && children}
      {isLoading && <Spinner variant="small" />}
    </BaseButton>
  );
};
