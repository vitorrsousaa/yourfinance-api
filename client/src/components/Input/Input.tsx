import { InputHTMLAttributes } from 'react';
import { InputViewProps, InputView } from './Input.view';

type Props = InputViewProps & InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: Props) {
  return <InputView {...props} />;
}
