import styled from 'styled-components';

export const Container = styled.div``;

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

  h1 {
    font-size: 3rem;
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
