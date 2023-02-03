import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';
import Sidebar from '../../components/Sidebar';
import SideIcon from '../../components/SideIcon';
import useErrors from '../../hooks/useErrors';
import { api } from '../../services/api';
import {
  Container,
  ContainerModality,
  ContainerModalTransactions,
  Content,
} from './styles';

interface ModalityProps {
  _id: string;
  name: string;
  icon: string;
  _v: number;
}

type TypeProps = 'Fixo' | 'Variável';

type Category = 'Receitas' | 'Despesas';

const Transactions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalities, setModalities] = useState<ModalityProps[]>([]);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<Category>('Despesas');
  const [amount, setAmount] = useState(0);
  const [createdAt, setCreatedAt] = useState('');
  const [type, setType] = useState<TypeProps>('Fixo');
  const [selectedModality, setSelectedModality] = useState('');
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
    api.get('/modality').then((response) => {
      setModalities(response.data);
    });
  }, []);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleDescriptionTransaction(event: BaseSyntheticEvent) {
    setDescription(event.target.value);

    if (!event.target.value) {
      setError({ field: 'description', message: 'Descrição é obrigatória' });
    } else {
      removeError('description');
    }
  }

  function handleSelectedCategory() {
    setCategory((prevState) =>
      prevState === 'Receitas' ? 'Despesas' : 'Receitas'
    );
  }

  function handleValueTransaction(event: BaseSyntheticEvent) {
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

  function handleSelectedType() {
    setType((prevState) => (prevState === 'Fixo' ? 'Variável' : 'Fixo'));
  }

  function handleSelectedDate(event: BaseSyntheticEvent) {
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

    console.log(data);

    setDescription('');
    setAmount(0);
    setSelectedModality('');
    setCreatedAt('');
    handleCloseModal();
    setIsLoading(false);
  }

  return (
    <>
      <Container>
        <Sidebar />
        <Content>
          <Header />

          <main>
            <div>
              <div className="containerName">
                <SideIcon category="Transactions" />
                <h1>Transações</h1>
              </div>
              <small>Visualize todas as transações anteriores</small>
            </div>
            <Button variant="primary" onClick={handleOpenModal}>
              Cadastrar nova transação +{' '}
            </Button>
          </main>

          <section>
            <div className="sectionHeader">
              <h2>Últimas transações</h2>
              <h3>Mostrando transações de 01 a 15 de jan</h3>
            </div>
          </section>
        </Content>
      </Container>
      <Modal
        title="Cadastrar nova transação"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        <ContainerModalTransactions onSubmit={handleSubmit}>
          <Input
            category="description"
            placeholder="Descrição"
            type="text"
            value={description}
            onChange={handleDescriptionTransaction}
            error={getErrorMessageByFieldName('description')}
          />
          <div className="containerDualOption">
            <Button
              variant="secondary"
              onClick={handleSelectedCategory}
              disabled={!(category === 'Receitas')}
            >
              Receitas
            </Button>
            <Button
              variant="secondary"
              disabled={!(category === 'Despesas')}
              onClick={handleSelectedCategory}
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
              onChange={handleValueTransaction}
              error={getErrorMessageByFieldName('value')}
            />
            <Input
              category="date"
              placeholder="Data"
              type="date"
              min="2023-01-01"
              maxLength={10}
              value={createdAt}
              onChange={handleSelectedDate}
              error={getErrorMessageByFieldName('date')}
            />
          </div>
          <div className="containerDualOption">
            <Button
              variant="secondary"
              onClick={handleSelectedType}
              disabled={!(type === 'Fixo')}
            >
              Fixo
            </Button>
            <Button
              variant="secondary"
              onClick={handleSelectedType}
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
        </ContainerModalTransactions>
      </Modal>
    </>
  );
};

export default Transactions;
