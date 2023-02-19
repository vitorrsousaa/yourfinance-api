import { useEffect, useMemo, useState } from 'react';
import TransactionsService from '../../services/TransactionsService';
import { Transaction, TransactionsData } from '../../types/Transaction';
import { itemsPerPage, siblingsCounts } from '../../constants/pagination';
import { toast } from 'react-toastify';

import formatAmount from '../../utils/formatAmount';
import formatDate from '../../utils/formatDate';

import Button from '../../components/Button';
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
import ModalDelete from './components/ModalDelete';

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
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [idDeleteTransaction, setIdDeleteTransaction] = useState('');

  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setIsLoading(true);

    async function loadTransactions() {
      try {
        const dataTransactions: TransactionsData =
          await TransactionsService.list(page);

        setTransactions(dataTransactions.transactions);
        setTotalItems(dataTransactions.totalItems);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadTransactions();
  }, [page]);

  const lastPage = useMemo(
    () => Math.ceil(totalItems / itemsPerPage),
    [transactions, page]
  );

  const previousPages = useMemo(
    () =>
      page > 1 ? generatePagesArray(page - 1 - siblingsCounts, page - 1) : [],
    [transactions, page]
  );

  const nextPages = useMemo(
    () =>
      page < lastPage
        ? generatePagesArray(page, Math.min(page + siblingsCounts, lastPage))
        : [],
    [transactions, page]
  );

  function getDates() {
    const firstElement = transactions[0].createdAt;
    const lastElement = transactions[transactions.length - 1].createdAt;

    const firstDate = new Date(firstElement).getDate();

    const lastDate = Intl.DateTimeFormat('pt-br', {
      day: 'numeric',
      month: 'short',
    }).format(new Date(lastElement));

    return `${firstDate} até ${lastDate}`;
  }

  function handlePageChange(page: number) {
    setPage(page);
  }

  function handleOpenTransactionModal() {
    setIsModalOpen(true);
  }

  function handleOpenDeleteModal(transactionId: string) {
    setIsModalDeleteOpen(true);
    setIdDeleteTransaction(transactionId);
  }

  async function handleDeleteTransaction(transactionId: string) {
    setIsLoading(true);

    console.log('aqui dentro');

    await TransactionsService.delete(transactionId);

    setTransactions((prevState) =>
      prevState.filter((transaction) => transaction._id !== transactionId)
    );

    setTotalItems((prevState) => prevState - 1);

    setIsLoading(false);
    toast.success('Excluída com sucesso');
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

      <ModalDelete
        isOpen={isModalDeleteOpen}
        onClose={() => setIsModalDeleteOpen(false)}
        id={idDeleteTransaction}
        onDelete={handleDeleteTransaction}
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
            <Button variant="primary" onClick={handleOpenTransactionModal}>
              Cadastrar nova transação +{' '}
            </Button>
          </main>

          <section>
            <div className="sectionHeader">
              <h2>Últimas transações</h2>
            </div>

            {transactions.length === 0 ? (
              <>
                <h3>Você ainda não possui transações</h3>
                <small>
                  Cadastre sua primeira transação, e registre seus gastos
                  pessoais
                </small>
              </>
            ) : (
              <>
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
                            onClick={() =>
                              handleEditTransaction(transaction._id)
                            }
                          >
                            🖊️
                          </IconTable>
                          <IconTable
                            onClick={() =>
                              handleOpenDeleteModal(transaction._id)
                            }
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
                      {page === lastPage
                        ? transactions.length
                        : page * itemsPerPage}
                    </strong>{' '}
                    de <strong>{totalItems}</strong>
                  </div>
                  <div>
                    {page >= 1 + siblingsCounts && (
                      <>
                        <PaginationItem
                          isNotSelected={true}
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
                            isNotSelected
                          >
                            {page}
                          </PaginationItem>
                        );
                      })}

                    <PaginationItem
                      isNotSelected={false}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </PaginationItem>

                    {nextPages.length > 0 &&
                      nextPages.map((page) => {
                        return (
                          <PaginationItem
                            isNotSelected
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
                          isNotSelected
                          onClick={() => handlePageChange(lastPage)}
                        >
                          {lastPage}
                        </PaginationItem>
                      </>
                    )}
                  </div>
                </Pagination>
              </>
            )}
          </section>
        </Content>
      </Container>
    </>
  );
};

export default Transactions;
