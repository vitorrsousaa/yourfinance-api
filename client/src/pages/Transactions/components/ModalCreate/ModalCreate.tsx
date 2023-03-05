import { useCallback, useEffect, useState } from 'react';
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
    isSubmitting,
    constants,
    setIsSubmitting,
    handleClearState,
  } = ModalCreateViewModel();

  const loadModalities = useCallback(async () => {
    try {
      const dataModalities = await ModalitiesService.list();

      setModalities(dataModalities);
    } catch (error) {
      toast.error(
        'Não conseguimos carregar as modalidades, tente reiniciar a página.'
      );
    }
  }, []);

  useEffect(() => {
    loadModalities();
  }, []);

  async function handleSubmit(event: React.SyntheticEvent) {
    setIsSubmitting(true);
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
    setIsSubmitting(false);
  }

  function newOnClose() {
    onClose();
    handleClearState();
  }

  return (
    <ModalCreateView
      selectCategories={constants.selectCategories}
      selectTypes={constants.selectTypes}
      onClose={newOnClose}
      form={form}
      handlers={handlers}
      modality={{
        selectedModality,
        modalities: modalities.map((modality) => modality.name),
      }}
      isSubmitting={isSubmitting}
      handleSubmit={handleSubmit}
      {...props}
    />
  );
}
