import { Icon } from '@/components/Icon';
import { ContentBoxed } from '@/components/template/ContentBoxed';
import { Page } from '@/components/template/Page';
import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';
import { useShopCart } from '@/data/hooks/useShopCart';
import { useLocation, useNavigate } from 'react-router-dom';

export function Produto() {
  let { state } = useLocation();
  let { name, description, price, image, stock } = state;
  let inStock = stock;
  const navigate = useNavigate();
  const { addItems } = useShopCart();

  const isLogged = localStorage.getItem('token') ? true : false;

  const handleBuy = () => {
    if (!isLogged) {
      navigate('/login');
    } else {
      addItems(state);
      navigate('/carrinho');
    }
  };

  return (
    <Page className="flex items-center justify-center">
      <ContentBoxed className="flex flex-wrap items-center justify-center gap-10">
        <div className="w-full md:w-[80%] lg:w-[65%] xl:w-[40%]">
          <Card className="flex h-[520px] w-full items-center justify-center">
            <div className="flex h-96 w-96 items-center">
              <CardHeader className="h-[500px] w-[500px]">
                <img
                  className="h-full w-full object-contain mix-blend-multiply"
                  src={image}
                  alt={name}
                />
              </CardHeader>
            </div>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          <div className="sm:w-full md:w-[640px] lg:w-[640px] xl:w-[640px]">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-gray-500">{description}</p>
          </div>
          {inStock > 0 ? (
            <p className="font-extrabold text-blue-900">Produto disponivel</p>
          ) : (
            <p className="font-extrabold text-red-500">Produto indisponivel</p>
          )}
          <p className="text-3xl font-bold text-blue-500">R$ {price}</p>

          {inStock > 0 ? (
            <Button
              className="bg-blue-500 text-white hover:bg-blue-600"
              size="xl"
              onClick={handleBuy}
            >
              <Icon name="ShoppingCart" className="size-4" />
              <p className="flex items-center text-base">Comprar</p>
            </Button>
          ) : (
            <Button
              className="bg-blue-500 text-white hover:bg-blue-600"
              size="xl"
              disabled
            >
              <Icon name="CircleX" className="size-4" />
              <p className="flex items-center text-base">Esgotado</p>
            </Button>
          )}
        </div>
      </ContentBoxed>
    </Page>
  );
}
