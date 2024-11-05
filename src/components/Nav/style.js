import styled from 'styled-components';

export const NavBar = styled.nav`
  height: 40px;
  width: 100vw;
  max-width: 100%;
  box-sizing: border-box;
`;

export const ListCateg = styled.ul`
  width: 80%;
  display: flex;
  justify-content: space-around;

  li {
    a {
      font-size: 14px;
      &:hover {
        transition: 0.4s;
        color: black;
      }
    }
  }
`;
