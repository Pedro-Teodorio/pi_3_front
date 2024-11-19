import { Icon } from "./Icon";

export function EmptyShopCart() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center ">
            <div className="w-1/2 text-center space-y-1">
                <Icon name="ShoppingCart" className="size-20 mx-auto text-sky-300" />
                <h1 className="text-3xl font-bold text-sky-400">Seu carrinho está vazio</h1>
                <p className="text-lg text-sky-400">Adicione produtos para continuar</p>
            </div>
        </div>
    );
}