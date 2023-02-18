import { ButtonThemeProps } from './types';
import theme from '../../../assets/styles/theme';

const border = 'solid 2px';

const customTheme: ButtonThemeProps = {
  primary: {
    initial: {
      background: theme.colors.blue[900],
      color: theme.colors.white[100],
      border: 'none',
    },
    hover: {
      background: theme.colors.blue[700],
      color: theme.colors.white[100],
      border: 'none',
    },
    active: {
      background: theme.colors.blue[950],
      color: theme.colors.white[100],
      border: 'none',
    },
    disabled: {
      background: theme.colors.gray[200],
      color: theme.colors.white[100],
      border: 'none',
    },
  },
  secondary: {
    initial: {
      background: theme.colors.white[100],
      color: theme.colors.blue[900],
      border: `${border} ${theme.colors.blue[900]}`,
    },
    hover: {
      background: theme.colors.white[100],
      color: theme.colors.blue[700],
      border: `${border} ${theme.colors.blue[700]}`,
    },
    active: {
      background: theme.colors.white[100],
      color: theme.colors.blue[950],
      border: `${border} ${theme.colors.blue[950]}`,
    },
    disabled: {
      background: theme.colors.white[100],
      color: theme.colors.gray[200],
      border: `${border} ${theme.colors.gray[200]}`,
    },
  },
  empty: {
    initial: {
      background: 'transparent',
      color: theme.colors.black[500],
      border: 'none',
    },
    hover: {
      background: 'transparent',
      color: theme.colors.gray[700],
      border: 'none',
    },
    active: {
      background: 'transparent',
      color: theme.colors.black[700],
      border: 'none',
    },
    disabled: {
      background: 'transparent',
      color: theme.colors.gray[200],
      border: 'none',
    },
  },
  delete: {
    initial: {
      background: 'transparent',
      color: theme.colors.error[900],
      border: `${border} ${theme.colors.error[900]}`,
    },
    hover: {
      background: theme.colors.error[700],
      color: theme.colors.white[100],
      border: 'none',
    },
    active: {
      background: theme.colors.error[900],
      color: theme.colors.white[100],
      border: 'none',
    },
    disabled: {
      background: 'transparent',
      color: theme.colors.gray[200],
      border: `${border} ${theme.colors.gray[200]}`,
    },
  },
};

export default customTheme;
