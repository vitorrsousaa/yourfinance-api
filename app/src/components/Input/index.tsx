import { useState } from 'react';
import { Email } from '../../assets/icons/Email';
import { Lock } from '../../assets/icons/Lock';
import { Text } from '../Text';

import { Border, InputBase, Container } from './styles';

interface InputProps {
  placeholder: string;
  type?: 'email';
  category: 'email' | 'person' | 'password';
  error: string;
}

const Input = ({ placeholder, type, category, error }: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);

  function handleFocusInput() {
    setIsFocus(true);
  }

  function handleBlurInput() {
    setIsFocus(false);
  }

  return (
    <>
      <Container>
        <InputBase
          placeholder={placeholder}
          error={error}
          placeholderTextColor={
            error ? '#FF2606' : isFocus ? '#395bfc' : '#2d2d2d'
          }
          onFocus={handleFocusInput}
          onBlur={handleBlurInput}
          isFocus={isFocus}
          keyboardType={type ? 'email-address' : 'default'}
        />

        {category === 'email' && (
          <Email color={error ? '#FF2606' : isFocus ? '#395bfc' : '#2d2d2d'} />
        )}

        {category === 'password' && (
          <Lock color={error ? '#FF2606' : isFocus ? '#395bfc' : '#2d2d2d'} />
        )}
      </Container>
      <Border isFocus={isFocus} error={error} />
      {error && (
        <Text color="#FF2606" size={12} weight="500">
          {error}
        </Text>
      )}
    </>
  );
};

export default Input;
