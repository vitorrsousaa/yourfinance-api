import { InputThemeProps } from './types';
import theme from '../../../assets/styles/theme';

const customTheme: InputThemeProps = {
  initial: {
    color: theme.colors.black[800],
  },
  focus: {
    color: theme.colors.blue[900],
  },
  error: {
    color: theme.colors.error[900],
  },
  disabled: {
    color: theme.colors.gray[700],
  },
};

export default customTheme;
