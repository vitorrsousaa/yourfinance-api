import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, input, a{
    font-family: 'Manrope', sans-serif;
    color: ${({ theme }) => theme.colors.black[900]}
  }

  a{
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
