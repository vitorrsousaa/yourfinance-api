import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;

  padding: 3.5rem 2rem;
  gap: 2rem;
  flex: 1;

  main {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 2rem;
      font-weight: 400;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
    width: 100%;

    border: 1px solid var(--gray-200);
    border-radius: 12px;

    h1 {
      font-weight: 700;
      font-size: 32px;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        small {
          font-size: 1rem;
          color: var(--black-500);
        }
      }
    }
  }

  .containerSections {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
  }
`;

export const Summary = styled.section`
  h3 {
    font-weight: 400;
    font-size: 1rem;
  }

  h3,
  strong {
    color: var(--black-700);
  }

  .containerSummary {
    display: flex;
    align-items: center;
    gap: 1rem;

    div + div {
      border-left: solid 2px var(--gray-700);
      padding-left: 1rem;
    }
  }
`;

export const BiggestModalityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & + & {
    margin-top: 0.5rem;
  }
`;
