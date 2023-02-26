import styled from 'styled-components';

export const BaseHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;

    color: var(--black-800);
    span {
      font-weight: 400;
    }
  }

  .containerAvatar {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h4 {
      font-size: 1rem;
    }

    img:first-child {
      width: 56px;
      height: 56px;
      border-radius: 100%;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 0.75rem;
    }

    .containerAvatar {
      gap: 0.2rem;
      h4 {
        font-size: 0.75rem;
      }

      img:last-child {
        width: 16px;
        height: 16px;
      }
    }
  }
`;
