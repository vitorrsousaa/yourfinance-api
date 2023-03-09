import { StyledPopover } from './Popover.styles';
import trash from '../../../assets/icons/trash.svg';
import edit from '../../../assets/icons/edit.svg';
import { useEffect } from 'react';

export interface PopoverViewProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PopoverView(props: PopoverViewProps) {
  const { isOpen, onClose } = props;

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (isOpen && !event.target.closest('.popover-menu')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <StyledPopover isOpen={isOpen} className="popover-menu">
      <div role={'button'}>
        <img src={edit} alt="edit-icon" />
        <small>Editar</small>
      </div>
      <div role={'button'}>
        <img src={trash} alt="edit-icon" />
        <small>Excluir</small>
      </div>
    </StyledPopover>
  );
}
