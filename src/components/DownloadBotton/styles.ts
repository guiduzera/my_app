/* eslint-disable import/prefer-default-export */
import { darken } from 'polished';
import styled from 'styled-components';

export const Button = styled.div`
  display: flex;
  justify-content: center;
  > button {
    background: ${({ theme }) => theme.primary};
    padding: 0.8rem 3rem;
    border-radius: 0.5rem;
    border: none;
    transition: 0.5s;
    &:hover {
      background: ${({ theme }) => darken(0.05, theme.primary)};
    }
    a {
      text-transform: uppercase;
      color: #fff;
      font-size: 1.5rem;
      font-weight: 300;
    }
    @media (max-width: 500px) {
      padding: 1rem;
      a {
        font-size: 1rem;
      }
    }
  }
`;
