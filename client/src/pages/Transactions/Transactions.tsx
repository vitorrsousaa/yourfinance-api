import { useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import ModalDanger from '../../components/ModalDanger';
import NoData from '../../components/NoData';
import TransactionsService from '../../services/TransactionsService';
import ModalCreate from './components/ModalCreate';
import { TransactionsView } from './Transactions.view';
import { TransactionsViewModel } from './Transactions.view-model';

export function Transactions() {
  const {
    isLoading,
    isLoadingDelete,
    setIsLoadingDelete,
    hasError,
    transactions,
    isModalCreateOpen,
    setIsModalCreateOpen,
    isModalDeleteOpen,
    setIsModalDeleteOpen,
    handleDeleteTransactionConfirmation,
    selectedTransactionToDelete,
    loadTransactions,
    setTransactions,
  } = TransactionsViewModel();

  useEffect(() => {
    loadTransactions();
  }, []);

  const handleDeleteTransaction = useCallback(async () => {
    setIsLoadingDelete(true);
    try {
      await TransactionsService.delete(selectedTransactionToDelete);

      setTransactions((prevState) =>
        prevState.filter(
          (transaction) => transaction._id !== selectedTransactionToDelete
        )
      );
      toast.success('Transação deletada com sucesso');
    } catch (error) {
      toast.error(
        'Não conseguimos deletar sua transação. Por favor tente novamente!'
      );
    } finally {
      setIsModalDeleteOpen(false);
      setIsLoadingDelete(false);
    }
  }, [selectedTransactionToDelete]);

  return (
    <>
      <Loader isLoading={isLoading} size="large" />

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
        isLoading={isLoadingDelete}
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
