import Error from '../../components/Error';
import Card from './components/Card';
import { OverviewStyled } from './Overview.styles';

interface OverviewViewProps {
  hasError: boolean;
}

export function OverviewView({ hasError }: OverviewViewProps) {
  function handleError() {
    console.log('teve um erro');
  }
  return (
    <>
      <OverviewStyled>
        <header className="header-overview">
          <h1>Oveevire Page</h1>
          <small>
            Olá, <strong>Natalia Nunes.</strong> Comece a controlar suas
            finanças.
          </small>
        </header>
        {hasError ? (
          <Error onClick={handleError} />
        ) : (
          <>
            <section className="container-cards-chart">
              <div className="container-cards">
                <Card type="income" title="Receitas" amount={4120} />
                <Card type="outcome" title="Despesas" amount={1245} />
              </div>
            </section>
          </>
        )}
      </OverviewStyled>
    </>
  );
}
