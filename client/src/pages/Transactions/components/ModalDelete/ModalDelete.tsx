import { ModalDeleteView, ModalDeleteViewProps } from './ModalDelete.view';

interface Props extends Omit<ModalDeleteViewProps, 'onDeletedTransaction'> {
  id: string;
  onDelete: (transactionId: string) => void;
}

export function ModalDelete({ id, onDelete, onClose, ...props }: Props) {
  function handleDeletedTransaction() {
    onDelete(id);
    onClose();
  }

  return (
    <ModalDeleteView
      onDeletedTransaction={handleDeletedTransaction}
      onClose={onClose}
      {...props}
    />
  );
}
