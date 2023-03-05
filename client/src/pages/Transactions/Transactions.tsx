import { useEffect } from 'react';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import ModalDanger from '../../components/ModalDanger';
import NoData from '../../components/NoData';
import ModalCreate from './components/ModalCreate';
import { TransactionsView } from './Transactions.view';
import { TransactionsViewModel } from './Transactions.view-model';

export function Transactions() {
  const {
    isLoading,
    hasError,
    transactions,
    isModalCreateOpen,
    setIsModalCreateOpen,
    isModalDeleteOpen,
    setIsModalDeleteOpen,
    transactionIdToDelete,
    handleDeleteTransaction,
    loadTransactions,
  } = TransactionsViewModel();

  useEffect(() => {
    loadTransactions();
  }, []);

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
