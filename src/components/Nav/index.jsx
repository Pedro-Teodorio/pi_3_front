import { NavBar, ListCateg } from './style';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [categorias, setCategorias] = useState([]); // Inicializa como um array vazio

  useEffect(() => {
    const url = 'http://127.0.0.1:8000/api/categorias'; // Substitua pela URL real da sua API
    axios
      .get(url)
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
        {categorias.map((categoria) => {
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
