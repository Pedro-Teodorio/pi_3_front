import {
  HeaderTag,
  ImageLogo,
  SearchInput,
  LoginContainer,
  CartContainer,
  SearchButton,
  SearchIcon,
} from './style';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <HeaderTag className="flex items-center justify-around font-inter">
      <section className="logo-container">
        <Link to={'/'}>
          <ImageLogo
            src="logo.svg"
            alt="Logo do site, representado por um lobo."
          />
        </Link>
      </section>
      <section className="flex items-center justify-around">
        <SearchInput
          placeholder="Digite aqui o que está procurando"
          className="flex-grow p-2 focus:outline-none" // Adicione um padding para dar espaço ao placeholder
        />
        <SearchButton type="button" className="p-2 text-neutral-800">
          <SearchIcon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </SearchIcon>
        </SearchButton>
      </section>

      <section className="flex items-center gap-10">
        <LoginContainer>
          <img src="profile.svg" alt="Icone com representando perfil." />

          <Link to={'/login'} className="text-white">
            Entrar ou Cadastre-se
          </Link>
        </LoginContainer>
        <CartContainer>
          <Link to={'#'}>
            <img src="cart.svg" alt="Imagem de um carrinho de mercado." />
          </Link>
        </CartContainer>
      </section>
    </HeaderTag>
  );
}
