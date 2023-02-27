import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  ${fonts}

  body, input, a{
    font-family: 'Gotham', sans-serif;
    font-weight: 400 ;
    color: ${({ theme }) => theme.colors.black[900]}
  }

  a{
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
