import Error from '../../components/Error';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import NoData from '../../components/NoData';
import { Transaction } from '../../types/Transaction';
import { StyledTransacions } from './Transactions.styles';

interface TransactionsViewProps {
  isLoading: boolean;
  hasError: boolean;
  handleError: () => void;
  transactions: Transaction[];
}

export function TransactionsView(props: TransactionsViewProps) {
  const { isLoading, hasError, transactions, handleError } = props;

  return (
    <StyledTransacions>
      <Loader isLoading={isLoading} />
      <Header page="Transações" />
      {hasError ? (
        <Error onError={handleError} />
      ) : transactions.length > 0 ? (
        <>
          <h1>Conteúdo da página</h1>
        </>
      ) : (
        <NoData onDataContent={() => console.log('executou')} />
      )}
    </StyledTransacions>
  );
}
