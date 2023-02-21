import styled from 'styled-components';

export const BaseModalContainer = styled.form`
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
