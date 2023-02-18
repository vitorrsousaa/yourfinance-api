import {
  LastTransactionsViewProps,
  LastTransactionsView,
} from './LastTransactions.view';

type Props = LastTransactionsViewProps;

export default function LastTransaction(props: Props) {
  return <LastTransactionsView {...props} />;
}
