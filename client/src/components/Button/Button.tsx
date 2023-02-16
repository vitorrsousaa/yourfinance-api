import { ButtonHTMLAttributes } from 'react';

import ButtonView, { ButtonViewProps } from './Button.view';

// aqui vou adicionar o theme

type Props = ButtonViewProps & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: Props) {
  return <ButtonView {...props} />;
}
