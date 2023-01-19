import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  /* justify-content: space-between; */

  flex: 1;
  padding: 0 32px;
  background: green;
`;

export const ContainerLogo = styled.View`
  align-items: center;
  margin-top: 32px;
`;

export const ContainerInputs = styled.View`
  width: 100%;
`;

export const ContainerKeyboard = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  padding: 0 32px;
  margin: 48px 0;

  justify-content: space-between;
  align-items: center;
`;
