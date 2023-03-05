import { useCallback, useEffect } from 'react';

import { toast } from 'react-toastify';
import ModalitiesService from '../../../../services/ModalitiesService';

import TransactionsService from '../../../../services/TransactionsService';

import { ModalCreateView } from './ModalCreate.view';

import { ModalCreateViewModel } from './ModalCreate.view-model';

export interface ModalCreateProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalCreate({ onClose, ...props }: ModalCreateProps) {
  const {
    form,
    selectedModality,
    handlers,
    isSubmitting,
    typesOptions,
    modalitiesOptions,
    categoriesOptions,
    setIsSubmitting,
    setModalities,
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

    try {
      await TransactionsService.create(transaction);
      toast.success('Transação adicionada');
    } catch (error) {
      toast.error('Não conseguimos adicionar sua transação, tente novamente');
    } finally {
      handleClearState();
      onClose();
      setIsSubmitting(false);
    }
  }

  function newOnClose() {
    onClose();
    handleClearState();
  }

  return (
    <ModalCreateView
      selectCategories={categoriesOptions}
      selectTypes={typesOptions}
      onClose={newOnClose}
      form={form}
      handlers={handlers}
      modality={{
        selectedModality,
        modalities: modalitiesOptions,
      }}
      isSubmitting={isSubmitting}
      handleSubmit={handleSubmit}
      {...props}
    />
  );
}
