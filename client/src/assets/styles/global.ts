import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';

export default createGlobalStyle`
    ${fonts}


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Gotham', sans-serif;
    /* font-weight: 400 ; */
  }

  body, input, a{
    color: ${({ theme }) => theme.colors.black[900]}
  }

  a{
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
