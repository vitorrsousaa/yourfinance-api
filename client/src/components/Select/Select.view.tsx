import { SelectHTMLAttributes } from 'react';
import { StyledSelected } from './Select.styles';

export interface SelectViewProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
}

export function SelectView(props: SelectViewProps) {
  const { options, placeholder, ...rest } = props;

  return (
    <StyledSelected {...rest}>
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={`key_${option}`}>{option}</option>
      ))}
    </StyledSelected>
  );
}
