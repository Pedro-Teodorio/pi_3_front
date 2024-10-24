import styled from 'styled-components';

export const HeaderTag = styled.header`
  width: 100vw;
  height: 64px;
  background: black;
  box-sizing: border-box;
`;

export const ImageLogo = styled.img`
  width: 40px;
  height: 40px;
`;

export const LoginContainer = styled.div`
  height: 48px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* border: 1px solid red; */
  box-sizing: border-box;

  a {
    font-size: 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CartContainer = styled.div`
  /* Estilo para carrinho */
`;

export const SearchInput = styled.input`
  display: flex;
  align-items: center;
  width: 740px;
  height: 32px;
  background: white;
  border-radius: 8px;
  padding-inline: 32px;
  font-size: 14px;

  ::placeholder {
    color: #939393;
  }
`;
export const SearchButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  margin-left: 650px;
`;

export const SearchIcon = styled.svg`
  width: 24px;
  height: 24px;
`;
