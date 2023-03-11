import { useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import ModalDanger from '../../components/ModalDanger';
import NoData from '../../components/NoData';
import TransactionsService from '../../services/TransactionsService';
import { Transaction, TransactionCreateProps } from '../../types/Transaction';
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

  async function handleSubmit(transactionData: TransactionCreateProps) {
    try {
      const response: Transaction = await TransactionsService.create(
        transactionData
      );

      setTransactions((prevState) => [response, ...prevState]);

      toast.success('Transação adicionada com sucesso');
    } catch {
      toast.error(
        'Não conseguimos criar sua transação. Tente novamente mais tarde'
      );
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} size="large" />

      <ModalCreate
        isOpen={isModalCreateOpen}
        onClose={() => setIsModalCreateOpen(false)}
        onSubmit={handleSubmit}
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
