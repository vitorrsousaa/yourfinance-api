import styled from 'styled-components';

export const StyledPopover = styled.div`
  background: ${({ theme }) => theme.colors.white[200]};
  padding: ${({ theme }) => theme.sizes[8]};

  border: 1px solid ${({ theme }) => theme.colors.black[200]};
  box-shadow: 4px 4px 4px rgba(102, 102, 102, 0.15);
  border-radius: ${({ theme }) => theme.sizes[4]};
  width: 100px;
  margin-right: 28px;

  small {
    font-weight: 400;
    font-size: ${({ theme }) => theme.sizes[12]};
    margin-left: ${({ theme }) => theme.sizes[8]};
  }

  div {
    cursor: pointer;
  }

  .divider {
    height: ${({ theme }) => theme.sizes[1]};
    background: ${({ theme }) => theme.colors.black[200]};
    margin: ${({ theme }) => theme.sizes[8]} 0;
  }
`;
