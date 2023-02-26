import { Spinner, SpinnerProps } from '../Spinner';
import { BaseLoader, Overlay } from './Loader.styles';

export interface LoaderViewProps extends SpinnerProps {}

export function LoaderView({ ...props }: LoaderViewProps) {
  return (
    <Overlay>
      <BaseLoader>
        <Spinner {...props} />
      </BaseLoader>
    </Overlay>
  );
}
