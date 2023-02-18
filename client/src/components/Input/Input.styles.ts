import styled, { css } from 'styled-components';
import { InputThemeProps } from './theme/types';

export interface InputBaseProps {
  isFocus: boolean;
  error?: string;
  customTheme: InputThemeProps;
}

export const InputBase = styled.div<InputBaseProps>`
  display: flex;
  flex-direction: column;

  width: 100%;

  small {
    color: ${({ customTheme }) => customTheme.error.color};
    font-size: 0.75rem;
  }

  label {
    height: 2rem;

    display: flex;
    align-items: center;

    border-bottom: solid 2px;

    ${({ isFocus, error, customTheme }) => {
      if (error) {
        return css`
          border-color: ${customTheme.error.color};

          svg {
            color: ${customTheme.error.color};
          }

          input {
            color: ${customTheme.error.color};

            &::placeholder {
              color: ${customTheme.error.color};
            }
          }
        `;
      }
      if (isFocus) {
        return css`
          border-color: ${customTheme.focus.color};

          svg {
            color: ${customTheme.focus.color};
          }

          input {
            color: ${customTheme.focus.color};

            &::placeholder {
              color: ${customTheme.focus.color};
            }
          }
        `;
      }

      return css`
        border-color: ${customTheme.initial.color};

        svg {
          color: ${customTheme.initial.color};
        }

        input {
          color: ${customTheme.initial.color};

          &::placeholder {
            color: ${customTheme.initial.color};
          }
        }
      `;
    }}

    input {
      border: none;
      background: transparent;
      font-size: 1rem;

      width: 100%;
      height: 100%;

      &:disabled {
        color: ${({ customTheme }) => customTheme.disabled.color};
      }
    }
  }
`;
