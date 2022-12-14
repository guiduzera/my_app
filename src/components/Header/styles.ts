/* eslint-disable import/prefer-default-export */
import { lighten } from 'polished';
import styled from 'styled-components';

interface IsActive {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  boder-bottom: 1px solid ${({ theme }) => theme.primary};

  ul {
    display: flex;
    gap: 2rem;
    aling-items: center;
  }
`;

export const LinkContainer = styled.li<IsActive>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.textHighlight)};
    }
  }
`;
