import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const SideBar = styled.aside`
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  background: var(--white-200);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0.5rem;

  width: 3.5rem;
  height: 100vh;

  position: sticky;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    span {
      font-weight: 400;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 2rem;
    font-weight: 400;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;

  padding: 3.5rem 2rem;
  gap: 2rem;
  flex: 1;

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
  }

  .containerSections {
    display: flex;
    align-items: flex-start;
    gap: 2rem;

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
