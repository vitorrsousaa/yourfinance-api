import { InputThemeProps } from './types';
import theme from '../../../assets/styles/theme';

const customTheme: InputThemeProps = {
  initial: {
    color: theme.colors.black[900],
  },
  focus: {
    color: theme.colors.green[500],
  },
  error: {
    color: theme.colors.red[400],
  },
  disabled: {
    color: theme.colors.black[200],
  },
};

export default customTheme;
