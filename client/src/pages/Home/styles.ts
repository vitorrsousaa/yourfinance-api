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
      font-size: 2rem;
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

  .containerPieChart {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    gap: 5rem;

    .containerModalityPieChart {
      height: 100%;
      width: 100%;
      opacity: 0;
      /* margin-right: 10rem; */
    }

    .show {
      transition: opacity 0.7s ease;
      opacity: 1;
    }
  }

  @media (max-width: 800px) {
    .containerSections {
      flex-direction: column;
    }

    .containerModalityPieChart {
      margin-right: 0;
    }
  }

  @media (max-width: 550px) {
    padding: 3.5rem 0.75rem;

    main {
      h1 {
        font-size: 1.5rem;
      }

      h2 {
        font-size: 0.95rem;
      }

      small {
        font-size: 0.75rem;
      }
    }

    section {
      padding: 0.75rem;

      h1 {
        font-size: 1.25rem;
      }
    }
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

  @media (max-width: 550px) {
    h3,
    strong {
      font-size: 0.85rem;
    }

    .containerSummary {
      gap: 0.5rem;

      div + div {
        padding-left: 0.25rem;
      }
    }
  }

  @media (max-width: 400px) {
    h1 {
      text-align: center;
    }
    .containerSummary {
      flex-direction: column;

      div + div {
        padding-top: 0.5rem;
        border-left: none;
        border-top: solid 2px var(--gray-700);
      }
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
