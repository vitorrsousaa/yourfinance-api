import { BaseSyntheticEvent, useEffect, useState } from 'react';
import useErrors from '../../hooks/useErrors';
import { api } from '../../services/api';
import { Button } from '../Button';
import Input from '../Input';
import Loading from '../Loading';
import Modal from '../Modal';
import { ContainerModality, ContainerModal } from './styles';

interface ModalCreateTransactionProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ModalityProps {
  _id: string;
  name: string;
  icon: string;
  _v: number;
}

type TypeProps = 'Fixo' | 'Variável';

type Category = 'Receitas' | 'Despesas';

const ModalCreateTransaction = ({
  isOpen,
  onClose,
}: ModalCreateTransactionProps) => {
  const [modalities, setModalities] = useState<ModalityProps[]>([]);
  const [selectedModality, setSelectedModality] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [createdAt, setCreatedAt] = useState('');
  const [category, setCategory] = useState<Category>('Despesas');
  const [type, setType] = useState<TypeProps>('Fixo');
  const [isLoading, setIsLoading] = useState(false);

  const { errors, getErrorMessageByFieldName, removeError, setError } =
    useErrors();

  const isFormValid =
    description &&
    amount &&
    category &&
    type &&
    selectedModality &&
    errors.length === 0;

  useEffect(() => {
    api.get('/modality').then((response) => setModalities(response.data));
  }, []);

  function handleCloseModal() {
    onClose();
    setDescription('');
    setAmount(0);
    setSelectedModality('');
    setCreatedAt('');
  }

  function handleChangeDescription(event: BaseSyntheticEvent) {
    setDescription(event.target.value);

    if (!event.target.value) {
      setError({ field: 'description', message: 'Descrição é obrigatória' });
    } else {
      removeError('description');
    }
  }

  function handleChangeCategory() {
    setCategory((prevState) =>
      prevState === 'Receitas' ? 'Despesas' : 'Receitas'
    );
  }

  function handleChangeAmount(event: BaseSyntheticEvent) {
    setAmount(parseFloat(event.target.value));

    if (!event.target.value) {
      setError({
        field: 'amount',
        message: 'Valor da transação é obrigatório',
      });
    } else {
      removeError('description');
    }
  }

  function handleChangeType() {
    setType((prevState) => (prevState === 'Fixo' ? 'Variável' : 'Fixo'));
  }

  function handleChangeDate(event: BaseSyntheticEvent) {
    setCreatedAt(event.target.value);

    if (!event.target.value) {
      setError({ field: 'date', message: 'Data é obrigatória' });
    } else if (new Date(event.target.value) > new Date()) {
      setError({
        field: 'date',
        message: 'Coloque uma data anterior ao dia atual',
      });
    } else {
      removeError('date');
    }
  }

  async function handleSubmit(event: React.SyntheticEvent) {
    setIsLoading(true);
    event.preventDefault();
    const transaction = {
      description,
      category,
      amount,
      createdAt,
      type,
      modality: selectedModality,
    };

    const data = await api.post('/transactions', transaction);

    console.log('handleSubmit - ModalCreateTransaction', data);

    handleCloseModal();
    setIsLoading(false);
  }

  return (
    <Modal
      title="Cadastrar nova transação"
      isOpen={isOpen}
      onClose={handleCloseModal}
    >
      <ContainerModal onSubmit={handleSubmit}>
        <Input
          category="description"
          placeholder="Descrição"
          type="text"
          value={description}
          onChange={handleChangeDescription}
          error={getErrorMessageByFieldName('description')}
        />
        <div className="containerDualOption">
          <Button
            variant="secondary"
            onClick={handleChangeCategory}
            disabled={!(category === 'Receitas')}
          >
            Receitas
          </Button>
          <Button
            variant="secondary"
            disabled={!(category === 'Despesas')}
            onClick={handleChangeCategory}
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
            onChange={handleChangeAmount}
            error={getErrorMessageByFieldName('value')}
          />
          <Input
            category="date"
            placeholder="Data"
            type="date"
            min="2023-01-01"
            maxLength={10}
            value={createdAt}
            onChange={handleChangeDate}
            error={getErrorMessageByFieldName('date')}
          />
        </div>
        <div className="containerDualOption">
          <Button
            variant="secondary"
            onClick={handleChangeType}
            disabled={!(type === 'Fixo')}
          >
            Fixo
          </Button>
          <Button
            variant="secondary"
            onClick={handleChangeType}
            disabled={!(type === 'Variável')}
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
                onClick={() => setSelectedModality(modality._id)}
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
          disabled={!isFormValid || isLoading}
          variant="primary"
          type="submit"
        >
          {isLoading ? <Loading /> : 'Criar nova transação'}
        </Button>
      </ContainerModal>
    </Modal>
  );
};

export default ModalCreateTransaction;
