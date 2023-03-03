import { OptionView, OptionViewProps } from './Option.view';

const options = [
  {
    value: 3,
    label: 'Últimos 3 meses',
  },
  {
    value: 6,
    label: 'Últimos 6 meses',
  },
  {
    value: 12,
    label: 'Últimos 12 meses',
  },
  {
    value: 24,
    label: 'Ver todas',
  },
];

interface OptionProps extends Omit<OptionViewProps, 'options'> {}

export function Option({ ...props }: OptionProps) {
  return <OptionView options={options} {...props} />;
}
