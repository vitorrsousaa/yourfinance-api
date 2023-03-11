import { PopoverView } from './Popover.view';

export interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectedDelete: () => void;
}

export function Popover(props: PopoverProps) {
  const { onSelectedDelete, onClose } = props;

  function handleDeleteTransaction() {
    onSelectedDelete();
    onClose();
  }

  function handleEditTransaction() {
    onClose();
  }

  return (
    <PopoverView
      handleDeleteTransaction={handleDeleteTransaction}
      handleEditTransaction={handleEditTransaction}
      {...props}
    />
  );
}
