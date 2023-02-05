import { useEffect, useState } from 'react';
import TransactionsService from '../../services/TransactionsService';
import { Transaction, TransactionsData } from '../../types/Transaction';

import formatAmount from '../../utils/formatAmount';
import formatDate from '../../utils/formatDate';

import { Button } from '../../components/Button';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import ModalCreateTransaction from '../../components/ModalCreateTransaction';
import Sidebar from '../../components/Sidebar';
import SideIcon from '../../components/SideIcon';

import {
  Container,
  Content,
  IconTable,
  Pagination,
  PaginationItem,
  TableTransactions,
} from './styles';
import { itemsPerPage, siblingsCounts } from '../../constants/pagination';

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    async function loadTransactions() {
      const dataTransactions: TransactionsData = await TransactionsService.list(
        page
      );

      console.log(dataTransactions);

      setTransactions(dataTransactions.transactions);
      setTotalItems(dataTransactions.totalItems);

      setIsLoading(false);
    }

    loadTransactions();
  }, [page]);

  const lastPage = Math.ceil(totalItems / itemsPerPage);

  const previousPages =
    page > 1 ? generatePagesArray(page - 1 - siblingsCounts, page - 1) : [];

  const nextPages =
    page < lastPage
      ? generatePagesArray(page, Math.min(page + siblingsCounts, lastPage))
      : [];

  function handlePageChange(page: number) {
    setPage(page);
  }

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

  function handleEditTransaction(transactionId: string) {
    console.log(transactionId);
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
                    <td style={{ display: 'flex', gap: '0.5rem' }}>
                      <IconTable
                        onClick={() => handleEditTransaction(transaction._id)}
                      >
                        🖊️
                      </IconTable>
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

            <Pagination>
              <div>
                <strong>{page * itemsPerPage - itemsPerPage + 1}</strong> -{' '}
                <strong>
                  {page === lastPage ? totalItems : page * itemsPerPage}
                </strong>{' '}
                de <strong>{totalItems}</strong>
              </div>
              <div>
                {page > 1 + siblingsCounts && (
                  <>
                    <PaginationItem
                      isSelected={true}
                      onClick={() => handlePageChange(1)}
                    >
                      1
                    </PaginationItem>
                    {page > 2 + siblingsCounts && <strong>...</strong>}
                  </>
                )}

                {previousPages.length > 0 &&
                  previousPages.map((page) => {
                    return (
                      <PaginationItem
                        key={page}
                        onClick={() => handlePageChange(page)}
                        isSelected
                      >
                        {page}
                      </PaginationItem>
                    );
                  })}

                <PaginationItem
                  isSelected={false}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </PaginationItem>

                {nextPages.length > 0 &&
                  nextPages.map((page) => {
                    return (
                      <PaginationItem
                        isSelected
                        key={page}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </PaginationItem>
                    );
                  })}

                {page + siblingsCounts < lastPage && (
                  <>
                    {page + 1 + siblingsCounts < lastPage && (
                      <strong>...</strong>
                    )}
                    <PaginationItem
                      isSelected
                      onClick={() => handlePageChange(lastPage)}
                    >
                      {lastPage}
                    </PaginationItem>
                  </>
                )}
              </div>
            </Pagination>
          </section>
        </Content>
      </Container>
    </>
  );
};

export default Transactions;
