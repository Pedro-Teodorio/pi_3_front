import { ContentBoxed } from './template/ContentBoxed';

export function TotalShopCart(product) {
  const { items } = product;
  const total = items
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  return (
    <ContentBoxed>
      <h1 className="mt-8 p-3 text-center text-xl font-extrabold md:text-2xl lg:text-3xl xl:text-3xl">
        Confira os produtos que estão no carrinho{' '}
        <span className="text-sky-500">R$ {total}</span>
      </h1>
    </ContentBoxed>
  );
}
