import { Icon } from './Icon';

export function EmptyShopCart() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="w-1/2 space-y-1 text-center">
        <Icon name="ShoppingCart" className="mx-auto size-20 text-sky-300" />
        <h1 className="text-3xl font-bold text-sky-400">
          Seu carrinho está vazio
        </h1>
        <p className="text-lg text-sky-400">Adicione produtos para continuar</p>
      </div>
    </div>
  );
}
