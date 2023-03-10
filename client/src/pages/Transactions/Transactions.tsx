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
    handleDeleteTransactionConfirmation,
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
        title="Deletar Transação"
        subtitle="Essa ação não pode ser desfeita!"
        description="Você tem certeza que deseja excluir a transação?"
        onDelete={handleDeleteTransaction}
      />

      {hasError ? (
        <Error onError={loadTransactions} />
      ) : transactions.length > 0 ? (
        <TransactionsView
          transactions={transactions}
          handleCreateModalOpen={() => setIsModalCreateOpen(true)}
          onSelectedDeleteTransaction={handleDeleteTransactionConfirmation}
        />
      ) : (
        <NoData onDataContent={() => setIsModalCreateOpen(true)} />
      )}
    </>
  );
}
