import { Modality } from '../../../../types/Modality';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import Modal from '../../../../components/Modal';

import { StyledModalContainer, ContainerModality } from './ModalCreate.styles';

import Select from '../../../../components/Select';
import { BaseSyntheticEvent } from 'react';

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
    onSelectedModality: (modality: string) => void;
  };
  handlers: {
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
  selectCategories: string[];
  selectTypes: string[];
  isLoading: boolean;
  isOpen: boolean;
  onClose: () => void;
  modality: {
    selectedModality: string;
    modalities: Modality[];
  };

  handleSubmit: (event: React.SyntheticEvent) => void;
}

export function ModalCreateView(props: ModalCreateViewProps) {
  const {
    isOpen,
    modality,
    form,
    handlers,
    isLoading,
    selectCategories,
    selectTypes,
    handleSubmit,
    onClose,
  } = props;

  const { modalities, selectedModality } = modality;

  const {
    amount,
    category,
    date,
    description,
    isValid,
    type,
    onSelectedModality,
  } = form;

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
  } = handlers;

  const teste = ['option1', 'options2'];

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
        />
        <div className="containerDualOption">
          <Select
            placeholder="Categoria da transação"
            options={selectCategories}
            value={category}
            onChange={handleCategory}
            error={handleCategoryError()}
          />
          <Select
            placeholder="Tipo de transação"
            options={selectTypes}
            value={type}
            onChange={handleType}
            error={handleTypeError()}
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
          />
        </div>

        <div className="containerSectionModality">
          {modalities.map((modality) => {
            const isSelected = selectedModality === modality._id;

            return (
              <ContainerModality
                key={modality._id}
                onClick={() => onSelectedModality(modality._id)}
                isSelected={isSelected}
                type="button"
              >
                <div>{modality.icon}</div>
                <small>{modality.name}</small>
              </ContainerModality>
            );
          })}
        </div>
        <Select options={teste} placeholder="Modalidade" />

        <Button
          variant="primary"
          type="submit"
          disabled={!isValid || isLoading}
        >
          {isLoading ? 'Enviando dados...' : 'Criar nova transação'}
        </Button>
      </StyledModalContainer>
    </Modal>
  );
}
