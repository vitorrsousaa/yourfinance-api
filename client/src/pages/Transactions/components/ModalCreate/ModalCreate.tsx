import { useEffect, useState } from 'react';
import { Modality } from '../../../../types/Modality';

import { toast } from 'react-toastify';

import ModalitiesService from '../../../../services/ModalitiesService';
import TransactionsService from '../../../../services/TransactionsService';

import { ModalCreateView } from './ModalCreate.view';

import { ModalCreateViewModel } from './ModalCreate.view-model';

export interface ModalCreateProps {
  isOpen: boolean;
  onClose: () => void;
}

// Verificar se não vai ser necessário zerar os states após executar a onClose()

export function ModalCreate({ onClose, ...props }: ModalCreateProps) {
  const [modalities, setModalities] = useState<Modality[]>([]);
  const {
    form,
    selectedModality,
    handlers,
    isLoading,
    constants,
    setIsLoading,
    handleClearState,
  } = ModalCreateViewModel();

  useEffect(() => {
    ModalitiesService.list().then((response) => {
      setModalities(response);
    });
  }, []);

  async function handleSubmit(event: React.SyntheticEvent) {
    setIsLoading(true);
    event.preventDefault();
    const transaction = {
      description: form.description,
      category: form.category,
      amount: form.amount,
      createdAt: form.date,
      type: form.type,
      modality: selectedModality,
    };

    await TransactionsService.create(transaction);

    onClose();
    handleClearState();
    toast.success('Transação adicionada');
    setIsLoading(false);
  }

  function newOnClose() {
    onClose();
    handleClearState();
  }

  return (
    <ModalCreateView
      {...props}
      selectCategories={constants.selectCategories}
      selectTypes={constants.selectTypes}
      onClose={newOnClose}
      form={form}
      handlers={handlers}
      modality={{ selectedModality, modalities }}
      isLoading={isLoading}
      handleSubmit={handleSubmit}
    />
  );
}
