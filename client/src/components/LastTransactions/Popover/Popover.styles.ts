import styled from 'styled-components';

export const StyledPopover = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  opacity: 1;

  div {
    width: 100%;
    text-align: left;
  }

  div:first-child {
    border-bottom: solid 1px ${({ theme }) => theme.colors.black[200]};
    padding-bottom: 8px;
    margin-bottom: 8px;
  }

  left: 88.7%;
  background: ${({ theme }) => theme.colors.white[200]};
  padding: ${({ theme }) => theme.sizes[8]};

  border: 1px solid ${({ theme }) => theme.colors.black[200]};
  box-shadow: 4px 4px 4px rgba(102, 102, 102, 0.15);
  border-radius: 4px;
  width: 100px;

  small {
    font-weight: 400;
    font-size: 12px;
    margin-left: 8px;
  }
`;
