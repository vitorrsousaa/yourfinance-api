import {
  LastTransactionsViewProps,
  LastTransactionsView,
} from './LastTransactions.view';

type Props = LastTransactionsViewProps;

export default function LastTransactions(props: Props) {
  return <LastTransactionsView {...props} />;
}
