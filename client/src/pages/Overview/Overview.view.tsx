import { OverviewStyled } from './Overview.styles';

export function OverviewView() {
  return (
    <OverviewStyled>
      <header className="header-overview">
        <h1>Oveevire Page</h1>
        <small>
          Olá, <strong>Natalia Nunes.</strong> Comece a controlar suas finanças.
        </small>
      </header>
      <div>
        <div>
          <div>card</div>
          <div>card</div>
        </div>
        <div>gráfico</div>
      </div>
    </OverviewStyled>
  );
}
