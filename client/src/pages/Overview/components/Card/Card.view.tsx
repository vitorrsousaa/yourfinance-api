import formatAmount from '../../../../utils/formatAmount';

import { IconTrendDown } from '../../../../assets/icons/trendDown';
import { IconTrendUp } from '../../../../assets/icons/trendUp';

import { StyledCard } from './Card.styles';

export interface CardViewProps {
  type: 'income' | 'outcome';
  title: string;
  amount: number;
  difference: number;
  percent: number;
}

export function CardView({
  type,
  title,
  amount,
  percent,
  difference,
}: CardViewProps) {
  return (
    <StyledCard>
      <div className="header-card-title">
        <strong>{title}</strong>
        <span className={type}>
          {percent}%{percent > 0 ? <IconTrendUp /> : <IconTrendDown />}
        </span>
      </div>
      <h1>{formatAmount(amount)}</h1>
      <small> {formatAmount(difference)} do que último mês</small>
    </StyledCard>
  );
}
