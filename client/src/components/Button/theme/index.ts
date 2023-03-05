import { ButtonThemeProps } from './types';
import theme from '../../../assets/styles/theme';

const border = 'solid 2px';

const customTheme: ButtonThemeProps = {
  primary: {
    initial: {
      background: theme.colors.green[400],
      color: theme.colors.black[900],
      border: 'none',
    },
    hover: {
      background: theme.colors.green[200],
      color: theme.colors.black[900],
      border: 'none',
    },
    active: {
      background: theme.colors.green[300],
      color: theme.colors.black[900],
      border: 'none',
    },
    disabled: {
      background: theme.colors.black[200],
      color: theme.colors.white[100],
      border: 'none',
    },
  },
  secondary: {
    initial: {
      background: theme.colors.white[100],
      color: theme.colors.green[400],
      border: `${border} ${theme.colors.green[400]}`,
    },
    hover: {
      background: theme.colors.white[100],
      color: theme.colors.green[200],
      border: `${border} ${theme.colors.green[200]}`,
    },
    active: {
      background: theme.colors.white[100],
      color: theme.colors.green[300],
      border: `${border} ${theme.colors.green[300]}`,
    },
    disabled: {
      background: theme.colors.white[100],
      color: theme.colors.black[200],
      border: `${border} ${theme.colors.black[200]}`,
    },
  },
  empty: {
    initial: {
      background: 'transparent',
      color: theme.colors.black[600],
      border: 'none',
    },
    hover: {
      background: 'transparent',
      color: theme.colors.black[300],
      border: 'none',
    },
    active: {
      background: 'transparent',
      color: theme.colors.black[700],
      border: 'none',
    },
    disabled: {
      background: 'transparent',
      color: theme.colors.black[200],
      border: 'none',
    },
  },
  danger: {
    initial: {
      background: 'transparent',
      color: theme.colors.red[400],
      border: `${border} ${theme.colors.red[400]}`,
    },
    hover: {
      background: theme.colors.red[300],
      color: theme.colors.white[100],
      border: 'none',
    },
    active: {
      background: theme.colors.red[400],
      color: theme.colors.white[100],
      border: 'none',
    },
    disabled: {
      background: 'transparent',
      color: theme.colors.black[200],
      border: `${border} ${theme.colors.black[200]}`,
    },
  },
};

export default customTheme;
