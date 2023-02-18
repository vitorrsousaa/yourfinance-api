import { BaseLoader, BaseLoaderProps, Overlay } from './Loader.styles';

export interface LoaderViewProps extends BaseLoaderProps {}

export function LoaderView({ size }: LoaderViewProps) {
  return (
    <Overlay>
      <BaseLoader size={size}>
        <div className="loader"></div>
      </BaseLoader>
    </Overlay>
  );
}
