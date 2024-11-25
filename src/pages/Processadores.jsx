import { ProductCard } from '@/components/ProductCard';
import { ContentBoxed } from '@/components/template/ContentBoxed';
import { Page } from '@/components/template/Page';
import { getProducts } from '@/api/endpoints';
import { useEffect, useState } from 'react';

export function Processadores() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Page>
      <ContentBoxed className="bg-zinc-50">
        <h1 className="bg-blue-500 p-3 text-center text-2xl font-extrabold text-white">
          Processadores
        </h1>
        <div className="flex gap-4">
          <div className="col-span-1 w-auto bg-gray-200">Processador 1</div>
          <div className="flex flex-wrap gap-4">
            {products
              .filter((product) => product.category_id === 1)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="w-[100%] md:w-[45%] lg:w-[49%] xl:w-[22%]"
                />
              ))}
          </div>
        </div>
      </ContentBoxed>
    </Page>
  );
}
