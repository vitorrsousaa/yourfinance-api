import { InputHTMLAttributes } from 'react';
import InputView, { InputViewProps } from './Input.view';

type Props = InputViewProps & InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: Props) {
  return <InputView {...props} />;
}
