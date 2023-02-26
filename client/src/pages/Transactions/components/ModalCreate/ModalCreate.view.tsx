import { Modality } from '../../../../types/Modality';
import { ModalCreateViewModelProps } from './ModalCreate.view-model';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import Modal from '../../../../components/Modal';

import { BaseModalContainer, ContainerModality } from './ModalCreate.styles';
import { ModalCreateProps } from './ModalCreate';

type ModalCreateViewProps = ModalCreateViewModelProps &
  ModalCreateProps &
  ModalCreateView;

interface ModalCreateView {
  modality: {
    selectedModality: string;
    modalities: Modality[];
  };

  handleSubmit: (event: React.SyntheticEvent) => void;
}

export function ModalCreateView({
  isOpen,
  modality,
  form,
  handlers,
  isLoading,
  handleSubmit,
  onClose,
}: ModalCreateViewProps) {
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
    handleAmount,
    handleAmountError,
    handleType,
    handleDate,
    handleDateError,
  } = handlers;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      header={true}
      title="Cadastrar nova transação"
    >
      <BaseModalContainer onSubmit={handleSubmit}>
        <Input
          placeholder="Descrição"
          category="description"
          value={description}
          onChange={handleDescription}
          error={handleDescriptionError()}
          maxLength={60}
        />
        <div className="containerDualOption">
          <Button
            variant="secondary"
            disabled={!(category === 'Receitas')}
            onClick={handleCategory}
          >
            Receitas
          </Button>
          <Button
            variant="secondary"
            disabled={!(category === 'Despesas')}
            onClick={handleCategory}
          >
            Despesas
          </Button>
        </div>
        <div className="containerDualOption">
          <Input
            category="value"
            placeholder="Valor"
            type="number"
            value={amount}
            onChange={handleAmount}
            error={handleAmountError()}
          />
          <Input
            category="date"
            placeholder="Data"
            min="2023-01-01"
            type="date"
            maxLength={10}
            value={date}
            onChange={handleDate}
            error={handleDateError()}
          />
        </div>
        <div className="containerDualOption">
          <Button
            variant="secondary"
            disabled={!(type === 'Fixo')}
            onClick={handleType}
          >
            Fixo
          </Button>
          <Button
            variant="secondary"
            disabled={!(type === 'Variável')}
            onClick={handleType}
          >
            Variável
          </Button>
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

        <Button
          variant="primary"
          type="submit"
          disabled={!isValid || isLoading}
        >
          {isLoading ? 'Enviando dados...' : 'Criar nova transação'}
        </Button>
      </BaseModalContainer>
    </Modal>
  );
}
