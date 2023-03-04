import { SelectHTMLAttributes } from 'react';
import { StyledOption } from './Option.styles';

export interface OptionViewProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: number; label: string }[];
}

export function OptionView({ options, ...props }: OptionViewProps) {
  return (
    <StyledOption {...props}>
      {options.map((option) => (
        <option value={option.value} key={`${option.label}_${option.value}`}>
          {option.label}
        </option>
      ))}
    </StyledOption>
  );
}
