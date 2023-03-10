import { ModalDangerView, ModalDangerViewProps } from './ModalDanger.view';

interface Props extends Omit<ModalDangerViewProps, ''> {}

export function ModalDanger({ ...props }: Props) {
  return <ModalDangerView {...props} />;
}
