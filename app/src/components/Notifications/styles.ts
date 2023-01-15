import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.white[100]};
  border-radius: 100%;
  padding: 10px;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
`;

export const Alert = styled.View`
  position: absolute;
  width: 12px;
  height: 12px;
  right: 1px;
  top: 1px;

  /* error/900 */

  background: ${({ theme }) => theme.colors.error[900]};
  border-radius: 100%;
`;
