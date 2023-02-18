import { ButtonHTMLAttributes } from 'react';

import { ButtonViewProps, ButtonView } from './Button.view';

type Props = ButtonViewProps & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: Props) {
  return <ButtonView {...props} />;
}
