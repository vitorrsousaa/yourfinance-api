import styled from 'styled-components/native';

interface InputProps {
  isFocus: boolean;
  error: string;
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Border = styled.View<InputProps>`
  width: 100%;
  height: 2px;
  background: ${({ isFocus, error }) =>
    error ? '#FF2606' : isFocus ? '#395BFC' : '#2d2d2d'};

  margin-top: 1px;
`;

export const InputBase = styled.TextInput<InputProps>`
  font-size: 16px;

  flex: 1;

  color: ${({ isFocus, error }) =>
    error ? '#FF2606' : isFocus ? '#395BFC' : '#2d2d2d'};
`;
