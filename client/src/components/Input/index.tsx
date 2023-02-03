import { InputHTMLAttributes, useState } from 'react';
import Date from '../../assets/icons/Date';
import Description from '../../assets/icons/Description';
import { Email } from '../../assets/icons/Email';
import { Lock } from '../../assets/icons/Lock';
import { Person } from '../../assets/icons/Person';
import Real from '../../assets/icons/Real';
import { Container, FormGroup } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  category: 'email' | 'person' | 'password' | 'date' | 'value' | 'description';
  error?: string;
}

const Input = ({ category, error, ...rest }: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const categories = {
    email: Email,
    person: Person,
    password: Lock,
    description: Description,
    value: Real,
    date: '',
  };

  const CategorySVG = categories[category];

  function handleFocusInput() {
    setIsFocus(true);
  }

  function handleBlurInput() {
    setIsFocus(false);
  }

  return (
    <FormGroup>
      <Container isFocus={isFocus} error={!!error}>
        <input
          type="text"
          {...rest}
          onFocus={handleFocusInput}
          onBlur={handleBlurInput}
        />
        {CategorySVG && (
          <CategorySVG
            color={
              error
                ? 'var(--error-900)'
                : isFocus
                ? 'var(--blue-900)'
                : '#2d2d2d'
            }
          />
        )}
      </Container>
      {error && <small>{error}</small>}
    </FormGroup>
  );
};

export default Input;
