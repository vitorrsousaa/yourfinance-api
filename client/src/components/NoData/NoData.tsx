import { NoDataView, NoDataViewProps } from './NoData.view';

interface NoDataProps extends NoDataViewProps {}
export function NoData({ ...props }: NoDataProps) {
  return <NoDataView {...props} />;
}
