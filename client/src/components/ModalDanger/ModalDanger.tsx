import { ModalDangerView, ModalDangerViewProps } from './ModalDanger.view';

interface Props extends Omit<ModalDangerViewProps, 'onDeletedTransaction'> {
  id: string;
}

export function ModalDanger({ id, onClose, ...props }: Props) {
  function handleDeletedTransaction() {
    onClose();
  }

  return (
    <ModalDangerView
      onDeletedTransaction={handleDeletedTransaction}
      onClose={onClose}
      {...props}
    />
  );
}
