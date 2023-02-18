import ReactDOM from 'react-dom';
import { LoaderView, LoaderViewProps } from './Loader.view';

interface Loader extends LoaderViewProps {
  isLoading: boolean;
}

export function Loader({ isLoading, ...props }: Loader) {
  let container = document.getElementById('loader-root');

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', 'loader-root');
    document.body.appendChild(container);
  }

  if (!isLoading) {
    return null;
  }

  return ReactDOM.createPortal(<LoaderView {...props} />, container);
}
