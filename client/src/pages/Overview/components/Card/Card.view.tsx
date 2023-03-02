import { IconTrendDown } from '../../../../assets/icons/trendDown';
import { IconTrendUp } from '../../../../assets/icons/trendUp';
import formatAmount from '../../../../utils/formatAmount';
import { StyledCard } from './Card.styles';

export interface CardViewProps {
  type: 'income' | 'outcome';
  title: string;
  amount: number;
}

export function CardView({ type, title, amount }: CardViewProps) {
  return (
    <StyledCard>
      <div className="header-card-title">
        <strong>{title}</strong>
        <span className={type}>
          24%
          {type === 'income' ? <IconTrendUp /> : <IconTrendDown />}
        </span>
      </div>
      <h1>{amount}</h1>
      <small>+ R$ 254,21 do que o mes anterior</small>
    </StyledCard>
  );
}
