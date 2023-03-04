import styled from 'styled-components';

export const StyledSelected = styled.label<{ error?: string }>`
  display: flex;
  flex-direction: column;

  width: 100%;

  small {
    font-size: ${({ theme }) => theme.fonts[14]};
    color: ${({ theme }) => theme.colors.red[400]};
  }

  select {
    display: flex;
    align-items: center;

    border: solid 1px;
    border-color: ${({ error, theme }) =>
      error ? theme.colors.red[400] : 'transparent'};
    border-radius: 4px;
    padding: 0.65rem;
    background: ${({ theme }) => theme.colors.white[200]};
    width: 100%;
    font-size: 1rem;

    transition: border-color 0.2s ease-in;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    color: ${({ error, theme }) => error && theme.colors.red[400]};

    &:focus {
      border-color: ${({ theme }) => theme.colors.green[400]};
      color: ${({ theme }) => theme.colors.green[400]};
    }

    &[disabled] {
      opacity: 1;
    }
  }
`;
