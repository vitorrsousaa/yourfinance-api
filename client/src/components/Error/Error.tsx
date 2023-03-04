import { ErrorView, ErrorViewProps } from './Error.view';

interface ErrorProps extends ErrorViewProps {}
export function Error({ ...props }: ErrorProps) {
  return <ErrorView {...props} />;
}
