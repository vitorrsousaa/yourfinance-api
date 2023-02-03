import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 3.5rem 2rem;
  gap: 2rem;
  flex: 1;

  main {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .containerName {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      h1 {
        font-weight: 400;
      }
    }

    small {
      font-weight: 700;
      color: var(--black-500);
    }

    button {
      max-width: 22.5rem;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;

    border: solid 1px var(--gray-200);
    border-radius: 12px;

    .sectionHeader {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      h3 {
        color: var(--black-500);
        font-weight: 400;
        font-size: 1rem;
      }
    }
  }
`;

export const ContainerModalTransactions = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .containerSectionModality {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  .containerDualOption {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`;

interface ContainerModalityProps {
  isSelected: boolean;
}

export const ContainerModality = styled.button<ContainerModalityProps>`
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  width: 4.375rem;

  opacity: ${({ isSelected }) => (!isSelected ? 0.5 : 1)};

  div {
    width: 2.75rem;
    height: 2.75rem;
    display: flex;
    align-items: center;
    justify-content: center;

    /* White */

    background: var(--white-200);
    /* shadow light */

    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.3);
    border-radius: 100%;
  }

  small {
    font-weight: 700;
    font-size: 10px;
  }
`;
