import { useEffect, useState } from 'react';
import TransactionsService from '../../services/TransactionsService';
import { TransactionResponse } from '../../types/Transaction';

import formatAmount from '../../utils/formatAmount';
import formatDate from '../../utils/formatDate';

import { Button } from '../../components/Button';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import ModalCreateTransaction from '../../components/ModalCreateTransaction';
import Sidebar from '../../components/Sidebar';
import SideIcon from '../../components/SideIcon';

import { Container, Content, IconTable, TableTransactions } from './styles';

const Transactions = () => {
  const [transactions, setTransactions] = useState<TransactionResponse[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadTransactions() {
      const dataTransactions = await TransactionsService.list();

      setTransactions(dataTransactions);

      setIsLoading(false);
    }

    loadTransactions();
  }, []);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  async function handleDeleteTransaction(transactionId: string) {
    setIsLoading(true);

    await TransactionsService.delete(transactionId);

    setTransactions((prevState) =>
      prevState.filter((transaction) => transaction._id !== transactionId)
    );

    setIsLoading(false);
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <ModalCreateTransaction
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

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

            <TableTransactions>
              <thead>
                <tr>
                  <th>Categoria</th>
                  <th>Data</th>
                  <th>Descrição</th>
                  <th>Tipo</th>
                  <th>Modalidade</th>
                  <th>Valor</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction._id}>
                    <td>{transaction.category}</td>
                    <td>{formatDate(transaction.createdAt)}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.modality.name}</td>
                    <td>{formatAmount(transaction.amount)}</td>
                    <td>
                      <IconTable
                        onClick={() => handleDeleteTransaction(transaction._id)}
                      >
                        🗑️
                      </IconTable>
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableTransactions>
          </section>
        </Content>
      </Container>
    </>
  );
};

export default Transactions;
