import Sidebar from '../../components/Sidebar';
import { PrivateRoutes } from './Private.routes';
import { PrivateStyled } from './Private.styles';

export function PrivateRoutesView() {
  return (
    <PrivateStyled>
      <Sidebar />
      <main className="content-private">
        <PrivateRoutes />
      </main>
    </PrivateStyled>
  );
}
