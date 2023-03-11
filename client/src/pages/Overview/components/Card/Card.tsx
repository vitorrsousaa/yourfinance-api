import { CardView, CardViewProps } from './Card.view';

interface CardProps extends CardViewProps {}

export function Card(props: CardProps) {
  const { percent, ...rest } = props;

  const newPercent = percent === Infinity ? 100 : percent;
  return <CardView percent={Math.round(newPercent)} {...rest} />;
}
