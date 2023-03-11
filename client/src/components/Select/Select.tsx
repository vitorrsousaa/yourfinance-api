import { SelectView, SelectViewProps } from './Select.view';

interface SelectProps extends SelectViewProps {}

export function Select(props: SelectProps) {
  return <SelectView {...props} />;
}
