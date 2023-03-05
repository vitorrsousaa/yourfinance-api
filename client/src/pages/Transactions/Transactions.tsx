import { useCallback, useEffect, useState } from 'react';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import ModalDanger from '../../components/ModalDanger';
import NoData from '../../components/NoData';
import TransactionsService from '../../services/TransactionsService';
import ModalCreate from './components/ModalCreate';
import { TransactionsView } from './Transactions.view';

export function Transactions() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [transactionIdToDelete, setTransactionIdToDelete] = useState('');

  const loadTransactions = useCallback(async () => {
    try {
      setIsLoading(true);
      const [dataTransaction] = await Promise.all([TransactionsService.list()]);

      setTransactions(dataTransaction.transactions);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTransactions();
  }, []);

  function handleDeleteTransaction(id: string) {
    setTransactionIdToDelete(id);
    setIsModalDeleteOpen(true);
  }

  return (
    <>
      <Loader isLoading={isLoading} variant="large" />

      <ModalCreate
        isOpen={isModalCreateOpen}
        onClose={() => setIsModalCreateOpen(false)}
      />

      <ModalDanger
        isOpen={isModalDeleteOpen}
        onClose={() => setIsModalDeleteOpen(false)}
        id={transactionIdToDelete}
        title="Deletar Transação"
        subtitle="Essa ação não pode ser desfeita!"
        description="Você tem certeza que deseja excluir a transação?"
      />

      {hasError ? (
        <Error onError={loadTransactions} />
      ) : transactions.length > 0 ? (
        <TransactionsView
          transactions={transactions}
          handleCreateModalOpen={() => setIsModalCreateOpen(true)}
          onDeleteTransaction={handleDeleteTransaction}
        />
      ) : (
        <NoData onDataContent={() => setIsModalCreateOpen(true)} />
      )}
    </>
  );
}
