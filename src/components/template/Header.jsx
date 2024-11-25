import { Link, useNavigate } from 'react-router-dom';
import Logo from '/images/logo.svg';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { Icon } from '@/components/Icon';
import instance from '@/api/axios';
import { useShopCart } from '@/data/hooks/useShopCart';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const { quantityItems } = useShopCart();
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const removeToken = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const profileRedirect = () => {
    navigate('/perfil');
  };

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await instance.get('/api/categorias');
        setCategorias(response.data);

        // Use o valor diretamente da resposta se quiser logar imediatamente
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    };

    fetchCategorias();
  }, []);

  return (
    <header className="bg-zinc-900">
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between p-4">
        <div>
          <Link to="/">
            <img className="h-10 w-10" src={Logo} alt="..." />
          </Link>
        </div>
        <div className="nav-links absolute left-0 top-[-100%] z-20 flex min-h-[45vh] w-full items-center bg-zinc-900 px-5 duration-500 md:min-h-[30vh] lg:static lg:min-h-fit lg:w-auto">
          <ul className="flex flex-col gap-8 font-semibold text-white lg:flex-row lg:items-center lg:gap-[4vw]">
            {categorias.slice(0, 4).map((categoria) => {
              return (
                <li key={categoria.id}>
                  <Link className="hover:text-blue-400" to="#">
                    {categoria.nome}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/carrinho">
            <div className="relative flex">
              <Icon
                name="ShoppingCart"
                className="size-8 text-white"
                fill="white"
              />
              {quantityItems > 0 && (
                <span className="absolute -right-2 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-xs text-white">
                  {quantityItems}
                </span>
              )}
            </div>
          </Link>
          {token ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <Icon name="User" className="size-8 text-zinc-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border-0 bg-zinc-900 text-white hover:text-sky-500">
                <DropdownMenuLabel className="text-white">
                  Minha conta
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white" />
                <DropdownMenuItem
                  onClick={profileRedirect}
                  className="font-bold text-white hover:text-sky-500"
                >
                  Perfil
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={removeToken}
                  className="font-bold text-white hover:text-sky-500"
                >
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              className="rounded-xl bg-blue-500 text-white hover:bg-blue-600"
              onClick={() => navigate('/login')}
            >
              Entrar
            </Button>
          )}

          <Icon
            name={`${isOpen ? 'X' : 'MenuIcon'}`}
            className={`size-10 cursor-pointer text-white lg:hidden`}
            onClick={() => {
              const navLinks = document.querySelector('.nav-links');
              navLinks.style.top = isOpen ? '-100%' : '60px';

              setIsOpen(!isOpen);
            }}
          />
        </div>
      </nav>
    </header>
  );
}
