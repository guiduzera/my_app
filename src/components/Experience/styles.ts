import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  > section {
    .company:hover {
      color: ${({ theme }) => theme.primary};
      transform: scale(0.95);
    }
    width: 100%;
    margin-top: 7rem;
    display: flex;
    gap: 5rem;
    padding-bottom: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};
    @media (max-width: 1000px) {
      gap: 1rem;
    }
    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;
    }
  }
`;

export const ContainerItem = styled.div`
  img {
    width: 8rem;
    height: 8rem;
  }
  a {
    color: ${({ theme }) => theme.secondary};
  }
  > a:visited {
    color: ${({ theme }) => theme.secondary};
  }
  > div {
    background: ${({ theme }) => theme.gradient};
    padding: 1rem;
    padding-top: 2.5rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 19rem;
    transition: 0.5s;
    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 1.5rem;
    }
    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1rem;
      font-weight: 300;
    }
  }
  &:hover > div {
    filter: brightness(1.3);
    transform: translateY(-20px);
  }
  &:nth-child(even) > div {
    margin-top: 4rem;
  }
  @media (max-width: 1000px) {
    > div {
      height: 15rem;
      padding-top: 1.5rem;
      h1 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }
      h2 {
        font-size: 1rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
  @media (max-width: 700px) {
    &:hover > div {
      transform: translateY(0);
    }
    > div {
      height: auto;
      align-items: center;
      padding: 2rem;
      max-width: 100%;
      h1 {
        font-size: 1.3rem;
      }
      h2 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;
