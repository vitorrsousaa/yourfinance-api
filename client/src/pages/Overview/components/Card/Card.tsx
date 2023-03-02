import { CardView, CardViewProps } from './Card.view';

interface CardProps extends CardViewProps {}

export function Card({ ...props }: CardProps) {
  return <CardView {...props} />;
}
