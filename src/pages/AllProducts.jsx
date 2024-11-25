import { ProductCard } from '@/components/ProductCard';
import { Page } from '@/components/template/Page';
import { getProducts, getCategories } from '@/api/endpoints';
import { useEffect, useState } from 'react';

export function AllProducts() {
  const [products, setProducts] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });

    getCategories().then((data) => {
      setCategorias(data);
    });
  }, []);

  return (
    <Page>
      <h1 className="w-full rounded-md bg-gradient-to-b from-zinc-900 to-zinc-600 p-6 pt-10 text-center font-frijole text-2xl text-white shadow-lg">
        NOSSOS PRODUTOS
      </h1>

      <div className="my-12 flex w-full flex-wrap justify-center gap-10">
        {products.map((product) => {
          const categoria = categorias.find(
            (cat) => cat.id === product.category_id
          );
          return (
            <ProductCard
              key={product.id}
              product={product}
              categoryId={product.category_id}
              categoryName={
                categoria ? categoria.nome : 'Categoria desconhecida'
              }
              className="w-full max-w-sm md:w-1/2 lg:w-1/3 xl:w-1/4"
            />
          );
        })}
      </div>
    </Page>
  );
}
