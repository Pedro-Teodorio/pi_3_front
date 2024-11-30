# Projeto Integrador 3 - Frontend

Este projeto é o frontend do Projeto Integrador 3, desenvolvido utilizando React e Vite. O objetivo do projeto é criar uma aplicação de e-commerce com diversas funcionalidades.

## Funcionalidades

- **Home**: Página inicial com banner, seções de informações e categorias de produtos.
- **Produtos**: Listagem de todos os produtos com filtro por categoria.
- **Produto**: Página de detalhes de um produto específico.
- **Carrinho**: Página de visualização e gerenciamento do carrinho de compras.
- **Finalizar Compra**: Página para finalizar a compra com informações de envio e pagamento.
- **Perfil**: Páginas de informações pessoais, endereços e pedidos do usuário.
- **Autenticação**: Páginas de login e cadastro de usuários.

## Bibliotecas Usadas

- **React**: Biblioteca principal para construção da interface.
- **Vite**: Ferramenta de build para desenvolvimento rápido.
- **React Router**: Gerenciamento de rotas da aplicação.
- **Axios**: Cliente HTTP para realizar requisições à API.
- **React Hook Form**: Gerenciamento de formulários.
- **Radix UI**: Componentes de interface acessíveis e personalizáveis.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.

## Estrutura do Projeto

- **src/pages**: Contém as páginas principais da aplicação.
  - **Home.jsx**: Página inicial.
  - **Produto.jsx**: Página de detalhes do produto.
  - **Carrinho.jsx**: Página do carrinho de compras.
  - **FinalizarCompra.jsx**: Página de finalização de compra.
  - **Perfil**: Páginas de perfil do usuário (informações pessoais, endereços, pedidos).
  - **Cadastrar.jsx**: Página de cadastro de usuário.
  - **Login.jsx**: Página de login de usuário.
  - **AllProducts.jsx**: Página de listagem de todos os produtos.
- **src/components**: Contém os componentes reutilizáveis da aplicação.
  - **template**: Componentes de layout (Header, Footer, Page, ContentBoxed).
  - **ui**: Componentes de interface (Button, Card, Input).
  - **Icon.jsx**: Componente para ícones.
  - **ShopCartProduct.jsx**: Componente para exibição de produtos no carrinho.
  - **ProductCard.jsx**: Componente para exibição de produtos.
  - **ProductCategorySection.jsx**: Componente para exibição de seções de categorias de produtos.

## Como Executar

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Inicie o servidor de desenvolvimento com `npm run dev`.
4. Acesse a aplicação em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.
