import { css } from 'styled-components';
import GothamBlack from '../fonts/Gotham-Black.otf';
import GothamBold from '../fonts/Gotham-Bold.otf';
import GothamBook from '../fonts/Gotham-Book.otf';
import GothamLight from '../fonts/Gotham-Light.otf';
import GothamMedium from '../fonts/Gotham-Medium.otf';
import GothamThin from '../fonts/Gotham-Thin.otf';

export default css`
  @font-face {
    font-family: 'Gotham';
    src: url(${GothamBlack});
    font-weight: 900;
  }
  @font-face {
    font-family: 'Gotham';
    src: url(${GothamBold});
    font-weight: 700;
  }
  @font-face {
    font-family: 'Gotham';
    src: url(${GothamMedium});
    font-weight: 500;
  }
  @font-face {
    font-family: 'Gotham';
    src: url(${GothamBook});
    font-weight: 400;
  }
  @font-face {
    font-family: 'Gotham';
    src: url(${GothamLight});
    font-weight: 300;
  }
  @font-face {
    font-family: 'Gotham';
    src: url(${GothamThin});
    font-weight: 200;
  }
`;
