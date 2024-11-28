import { ProductCard } from '@/components/ProductCard';
import { Page } from '@/components/template/Page';
import { getProducts, getCategories } from '@/api/endpoints';
import { Icon } from '@/components/Icon';
import { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function AllProducts() {
  const [products, setProducts] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });

    getCategories().then((data) => {
      setCategorias(data);
    });
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category_id === selectedCategory)
    : products;

  return (
    <Page>
      <div className="relative w-full">
        <div className="flex items-center justify-between bg-gradient-to-b from-zinc-900 to-zinc-600 p-6 pt-10 text-white shadow-lg">
          <h1 className="font-frijole text-2xl">NOSSOS PRODUTOS</h1>

          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Icon
                name="Filter"
                className="size-8 text-white hover:text-sky-500"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-0 bg-zinc-900 text-white hover:text-sky-500">
              <DropdownMenuLabel className="text-white">
                Categorias
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white" />

              <DropdownMenuItem
                onClick={() => setSelectedCategory(null)}
                className="font-bold text-white hover:text-sky-500"
              >
                Todas as categorias
              </DropdownMenuItem>

              {categorias.map((categoria) => (
                <DropdownMenuItem
                  key={categoria.id}
                  onClick={() => setSelectedCategory(categoria.id)}
                  className="font-bold text-white hover:text-sky-500"
                >
                  {categoria.nome}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="my-12 flex w-full flex-wrap justify-center gap-10">
        {filteredProducts.map((product) => {
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
