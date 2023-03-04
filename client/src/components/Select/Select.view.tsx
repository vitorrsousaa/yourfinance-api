import { SelectHTMLAttributes } from 'react';
import { StyledSelected } from './Select.styles';

export interface SelectViewProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  error?: string;
}

export function SelectView(props: SelectViewProps) {
  const { options, placeholder, error, ...rest } = props;

  return (
    <StyledSelected error={error}>
      <select {...rest}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={`key_${option}`} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <small>{error}</small>}
    </StyledSelected>
  );
}
