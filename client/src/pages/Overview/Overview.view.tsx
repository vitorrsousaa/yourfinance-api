import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Card from './components/Card';
import { OverviewStyled } from './Overview.styles';

interface dataCards {
  currentMonth: number;
  lastMonth: number;
  difference: number;
  percent: number;
}

interface OverviewViewProps {
  hasError: boolean;
  handleError: () => void;
  isLoading: boolean;
  incomeData: dataCards;
  outcomeData: dataCards;
}

export function OverviewView(props: OverviewViewProps) {
  const { hasError, isLoading, incomeData, outcomeData, handleError } = props;

  return (
    <OverviewStyled>
      <Loader isLoading={isLoading} variant="large" />
      <header className="header-overview">
        <h1>Overview Page</h1>
        <small>
          Olá, <strong>Natalia Nunes.</strong> Comece a controlar suas finanças.
        </small>
      </header>
      {hasError ? (
        <Error onError={handleError} />
      ) : (
        <>
          <section className="container-cards-chart">
            <div className="container-cards">
              <Card
                type="income"
                title="Receitas"
                amount={incomeData.currentMonth}
                difference={incomeData.difference}
                percent={incomeData.percent}
              />
              <Card
                type="outcome"
                title="Despesas"
                amount={outcomeData.currentMonth}
                difference={outcomeData.difference}
                percent={outcomeData.percent}
              />
            </div>
          </section>
        </>
      )}
    </OverviewStyled>
  );
}
