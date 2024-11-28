import { Card, CardHeader, CardContent, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShopCart } from '@/data/hooks/useShopCart';

export function ProductCard({ product, categoryName, className }) {
  const { id, name, price, image } = product;
  const { addItems } = useShopCart();

  const nameUrl = name.toLowerCase().replace(/[, ]+/g, '-');
  return (
    <Card
      className={`flex flex-col items-center rounded-3xl bg-white p-6 shadow-lg ${className} h-auto w-80 sm:w-72 md:w-80`}
    >
      <Link
        className="flex h-full flex-col items-center gap-6 text-center"
        to={`/produto/${id}/${nameUrl}`}
        state={product}
      >
        <div className="h-52 w-full overflow-hidden rounded-lg">
          <CardHeader className="h-full w-full">
            <img
              className="h-full w-full object-cover"
              src={image}
              alt={name}
            />
          </CardHeader>
        </div>

        <CardContent className="flex flex-col items-center gap-4">
          <p className="text-lg font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{categoryName}</p>
          <CardTitle className="text-2xl font-bold text-blue-500">
            R$ {price}
          </CardTitle>
        </CardContent>
      </Link>

      <Button
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-lg text-white hover:bg-blue-600"
        onClick={() => addItems(product)}
      >
        Adicionar ao carrinho
        <ChevronRight className="h-6 w-6" />
      </Button>
    </Card>
  );
}
