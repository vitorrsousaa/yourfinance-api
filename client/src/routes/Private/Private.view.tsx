import Sidebar from '../../components/Sidebar';
import { PrivateRoutesProvider } from './Private.routes';
import { PrivateStyled } from './Private.styles';

export function PrivateRoutesView() {
  return (
    <PrivateStyled>
      <Sidebar />
      <main className="content-private">
        <PrivateRoutesProvider />
      </main>
    </PrivateStyled>
  );
}
