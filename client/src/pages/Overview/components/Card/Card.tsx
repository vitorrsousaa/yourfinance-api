import { CardView, CardViewProps } from './Card.view';

interface CardProps extends CardViewProps {}

export function Card({ percent, ...props }: CardProps) {
  return <CardView percent={Math.round(percent)} {...props} />;
}
