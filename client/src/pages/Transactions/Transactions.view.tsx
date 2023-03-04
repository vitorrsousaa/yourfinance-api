import Header from '../../components/Header';
import Loader from '../../components/Loader';
import { StyledTransacions } from './Transactions.styles';

export function TransactionsView() {
  return (
    <StyledTransacions>
      <Header page="Transações" />
      {/* <Loader /> */}
      <div>
        <p>transactions page</p>
      </div>
    </StyledTransacions>
  );
}
