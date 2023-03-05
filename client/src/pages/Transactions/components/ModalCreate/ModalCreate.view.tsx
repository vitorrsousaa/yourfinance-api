import { BaseSyntheticEvent } from 'react';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import Modal from '../../../../components/Modal';

import { StyledModalContainer } from './ModalCreate.styles';

import Select from '../../../../components/Select';

type TypeProps = 'Fixo' | 'Variável';

type Category = 'Receitas' | 'Despesas';

export interface ModalCreateViewProps {
  form: {
    description: string;
    amount: number;
    date: string;
    category: Category;
    type: TypeProps;
    isValid: boolean;
  };
  handlers: {
    handleSelectedModality: (event: BaseSyntheticEvent) => void;
    handleModalityError: () => string | undefined;
    handleDescription: (event: BaseSyntheticEvent) => void;
    handleDescriptionError: () => string | undefined;
    handleCategory: (event: BaseSyntheticEvent) => void;
    handleCategoryError: () => string | undefined;
    handleAmount: (event: BaseSyntheticEvent) => void;
    handleAmountError: () => string | undefined;
    handleType: (event: BaseSyntheticEvent) => void;
    handleTypeError: () => string | undefined;
    handleDate: (event: BaseSyntheticEvent) => void;
    handleDateError: () => string | undefined;
  };
  selectCategories: { id: string; label: string }[];
  selectTypes: { id: string; label: string }[];
  isSubmitting: boolean;
  isOpen: boolean;
  onClose: () => void;
  modality: {
    selectedModality: string;
    modalities: { id: string; label: string }[];
  };

  handleSubmit: (event: React.SyntheticEvent) => void;
}

export function ModalCreateView(props: ModalCreateViewProps) {
  const {
    isOpen,
    modality,
    form,
    handlers,
    isSubmitting,
    selectCategories,
    selectTypes,
    handleSubmit,
    onClose,
  } = props;

  const { modalities, selectedModality } = modality;

  const { amount, category, date, description, isValid, type } = form;

  const {
    handleDescription,
    handleDescriptionError,
    handleCategory,
    handleCategoryError,
    handleAmount,
    handleAmountError,
    handleType,
    handleTypeError,
    handleDate,
    handleDateError,
    handleSelectedModality,
    handleModalityError,
  } = handlers;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      header={true}
      title="Cadastrar nova transação"
      subtitle="Preencha os dados da transação"
    >
      <StyledModalContainer onSubmit={handleSubmit}>
        <Input
          placeholder="Descrição da transação"
          category="description"
          value={description}
          onChange={handleDescription}
          error={handleDescriptionError()}
          maxLength={35}
          disabled={isSubmitting}
        />
        <div className="containerDualOption">
          <Select
            placeholder="Categoria da transação"
            options={selectCategories}
            value={category}
            onChange={handleCategory}
            error={handleCategoryError()}
            disabled={isSubmitting}
          />
          <Select
            placeholder="Tipo de transação"
            options={selectTypes}
            value={type}
            onChange={handleType}
            error={handleTypeError()}
            disabled={isSubmitting}
          />
        </div>
        <div className="containerDualOption">
          <Input
            category="value"
            placeholder="Valor da transação"
            type="number"
            value={amount}
            onChange={handleAmount}
            error={handleAmountError()}
            disabled={isSubmitting}
          />
          <Input
            category="date"
            placeholder="Data da transação"
            min="2023-01-01"
            type="date"
            maxLength={10}
            value={date}
            onChange={handleDate}
            error={handleDateError()}
            disabled={isSubmitting}
          />
        </div>
        <Select
          options={modalities}
          placeholder="Modalidade"
          value={selectedModality}
          onChange={handleSelectedModality}
          error={handleModalityError()}
          disabled={isSubmitting}
        />

        <Button
          variant="primary"
          type="submit"
          disabled={!isValid}
          isLoading={isSubmitting}
        >
          Criar nova transação
        </Button>
      </StyledModalContainer>
    </Modal>
  );
}
