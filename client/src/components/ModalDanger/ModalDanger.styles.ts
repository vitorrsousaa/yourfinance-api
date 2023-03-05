import styled from 'styled-components';

export const StyledModalDanger = styled.div`
  small {
    font-size: 1rem;
  }

  .containerButton {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    margin-top: 1.5rem;

    button:first-child {
      width: 7.5rem;
    }

    button:last-child {
      width: 16.25rem;
    }
  }
`;
