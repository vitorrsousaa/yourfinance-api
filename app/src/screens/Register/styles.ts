import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
  margin: 32px 0;
  padding: 0 32px;
`;

export const ContainerText = styled.View`
  height: 124px;
`;

export const ContentText = styled.View`
  margin-top: 16px;
`;

export const ContainerInput = styled.View`
  width: 100%;
  height: 310px;
  justify-content: space-between;

  background: green;
  margin-bottom: 24px;
`;

export const ContainerFooter = styled.View`
  width: 100%;
  justify-content: center;
  flex-direction: row;
  margin-top: 24px;
`;

export const ContainerButtonReturn = styled.TouchableOpacity`
  width: 44px;
  height: 44px;

  background: #fafafa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 32px;

  justify-content: center;
  align-items: center;
`;
