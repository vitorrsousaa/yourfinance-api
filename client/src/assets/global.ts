import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --black-900: #1E1F25;
    --black-800: #2D2D2D;
    --black-700: #454545;
    --black-500: #666666;

    --gray-700: #98A2B2;
    --gray-200: #CCCCCC;

    --white-300: #E4E4E4;
    --white-200: #F1F1F1;
    --white-100: #FAFAFA;

    --blue-900: #395BFC;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    font-family: 'Manrope', sans-serif;
    color: var(---black-800);
  }

  a{
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
