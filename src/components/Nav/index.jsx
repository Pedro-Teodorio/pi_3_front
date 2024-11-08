import { NavBar, ListCateg } from './style';
import { useState, useEffect } from 'react';
import api from '../../api/axiosConfig';

export default function Nav() {
  const [categorias, setCategorias] = useState([]); // Inicializa como um array vazio

  useEffect(() => {
    api
      .get('/api/categorias')
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }, []);

  console.log(categorias);
  return (
    <NavBar className="flex items-center justify-center bg-primary font-inter font-bold">
      {/* Limitar quatidade de lista atés 5 categorias, listando pela que tem mais produtos  */}
      <ListCateg>
        {categorias.slice(0, 5).map((categoria) => {
          return (
            <li className="text-white" key={categoria.id}>
              <a href="#">{categoria.nome}</a>
            </li>
          );
        })}
      </ListCateg>
    </NavBar>
  );
}
