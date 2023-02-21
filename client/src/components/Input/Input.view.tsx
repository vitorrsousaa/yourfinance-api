import { InputBase, InputBaseProps } from './Input.styles';

import Description from '../../assets/icons/Description';
import Email from '../../assets/icons/Email';
import Person from '../../assets/icons/Person';
import Lock from '../../assets/icons/Lock';
import Real from '../../assets/icons/Real';
import customTheme from './theme';
import { useState } from 'react';

type categories =
  | 'email'
  | 'person'
  | 'password'
  | 'date'
  | 'value'
  | 'description';

export interface InputViewProps extends Pick<InputBaseProps, 'error'> {
  category: categories;
}

const categories = {
  email: Email,
  person: Person,
  password: Lock,
  description: Description,
  value: Real,
  date: '',
};

export function InputView({ error, category, ...props }: InputViewProps) {
  const [isFocus, setIsFocus] = useState(false);

  const CategorySVG = categories[category];

  function handleFocusInput() {
    setIsFocus(true);
  }

  function handleBlurInput() {
    setIsFocus(false);
  }

  return (
    <InputBase isFocus={isFocus} error={error} customTheme={customTheme}>
      <label>
        <input
          type="text"
          onFocus={handleFocusInput}
          onBlur={handleBlurInput}
          {...props}
        />
        {CategorySVG && <CategorySVG />}
      </label>
      {!!error && <small>{error}</small>}
    </InputBase>
  );
}
