import { InputHTMLAttributes, useState } from 'react';
import { Email } from '../../assets/icons/Email';
import { Lock } from '../../assets/icons/Lock';
import { Person } from '../../assets/icons/Person';
import { Container, FormGroup } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  category: 'email' | 'person' | 'password';
  error?: string;
}

const Input = ({ category, error, ...rest }: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);

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
        {category === 'email' && (
          <Email
            color={
              error
                ? 'var(--error-900)'
                : isFocus
                ? 'var(--blue-900)'
                : '#2d2d2d'
            }
          />
        )}
        {category === 'person' && (
          <Person
            color={
              error
                ? 'var(--error-900)'
                : isFocus
                ? 'var(--blue-900)'
                : '#2d2d2d'
            }
          />
        )}
        {category === 'password' && (
          <Lock
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
