import styled, { css } from 'styled-components';

export interface SpinnerProps {
  variant?: 'small' | 'medium' | 'large';
}

const spinnerVariants = {
  small: css`
    width: 34px;
    height: 34px;
  `,
  medium: css`
    width: 48px;
    height: 48px;
  `,
  large: css`
    width: 72px;
    height: 72px;
  `,
};

export const Spinner = styled.div<SpinnerProps>`
  ${({ variant }) =>
    variant ? spinnerVariants[variant] : spinnerVariants.medium}
  border-radius: 50%;
  background: radial-gradient(
        farthest-side,
        ${({ theme }) => theme.colors.green[500]} 94%,
        #0000
      )
      top/8px 8px no-repeat,
    conic-gradient(#0000 30%, ${({ theme }) => theme.colors.green[500]});
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: s3 1s infinite linear;

  @keyframes s3 {
    100% {
      transform: rotate(1turn);
    }
  }
`;
