import { Icon } from '@/components/Icon';
import { Input } from '@/components/Input';
import { ShopCartProduct } from '@/components/ShopCartProduct';
import { ContentBoxed } from '@/components/template/ContentBoxed';
import { Page } from '@/components/template/Page';
import { Button } from '@/components/ui/button';
import { useShopCart } from '@/data/hooks/useShopCart';

export function FinalizarCompra() {
  const { items, addItems, removeItems, removeOneItem } = useShopCart();
  return (
    <Page className="flex flex-col items-center justify-center">
      <ContentBoxed>
        <h1 className="mt-8 p-3 text-center text-xl font-extrabold md:text-2xl lg:text-3xl xl:text-3xl">
          Finalizar Compra
        </h1>
      </ContentBoxed>
      <ContentBoxed className="my-10 flex justify-center bg-zinc-50 p-4">
        <div className="flex flex-col-reverse gap-4 md:flex-col-reverse lg:flex-col-reverse xl:flex-row">
          <div className="flex flex-col gap-4 p-4">
            <h2 className="text-xl font-bold text-sky-500">
              Informações de envio
            </h2>
            <Input.Root
              width="xl:w-[45rem] lg:w-full md:w-full w-full"
              height="h-14"
            >
              <Input.Icon name="LocateFixed" />
              <Input.Content placeholder="CEP" type="text" />
            </Input.Root>
            <Input.Root
              width="xl:w-[45rem] lg:w-full md:w-full w-full"
              height="h-14"
            >
              <Input.Icon name="MapPin" />
              <Input.Content placeholder="Estado" type="text" />
            </Input.Root>
            <Input.Root
              width="xl:w-[45rem] lg:w-full md:w-full w-full"
              height="h-14"
            >
              <Input.Icon name="Home" />
              <Input.Content placeholder="Estado" type="text" />
            </Input.Root>
            <Input.Root
              width="xl:w-[45rem] lg:w-w-full md:w-w-full w-full"
              height="h-14"
            >
              <Input.Icon name="Hash" />
              <Input.Content placeholder="Número" type="number" />
            </Input.Root>
            <Input.Root
              width="xl:w-[45rem] lg:w-full md:w-full w-full"
              height="h-14"
            >
              <Input.Icon name="Hotel" />
              <Input.Content placeholder="Cidade" type="text" />
            </Input.Root>
            <Input.Root
              width="xl:w-[45rem] lg:w-full md:w-full w-full"
              height="h-14"
            >
              <Input.Icon name="Milestone" />
              <Input.Content placeholder="Logradouro" type="text" />
            </Input.Root>
            <Input.Root
              width="xl:w-[45rem] lg:w-full md:w-full w-full"
              height="h-14"
            >
              <Input.Icon name="Ellipsis" />
              <Input.Content placeholder="Complemento" type="text" />
            </Input.Root>
            <div className="mt-8 h-px w-full bg-zinc-200 md:w-[45rem] lg:w-[45rem] xl:w-[45rem]"></div>
            <h2 className="text-xl font-bold text-sky-500">
              Informações de pagamento
            </h2>
            <Input.Root
              width="xl:w-[45rem] lg:w-full md:w-full w-full"
              height="h-14"
            >
              <Input.Icon name="WalletCards" />
              <Input.Content placeholder="Nome no cartão" type="text" />
            </Input.Root>
            <Input.Root
              width="xl:w-[45rem] lg:w-full md:w-full w-full"
              height="h-14"
            >
              <Input.Icon name="CreditCard" />
              <Input.Content placeholder="Número do cartão" type="text" />
            </Input.Root>
            <div className="flex flex-col gap-4 md:flex-row lg:flex-row xl:flex-row">
              <div className="space-y-1">
                <Input.Root
                  width="xl:w-[22rem] lg:w-[30rem] md:w-[23.5rem] w-full"
                  height="h-14"
                >
                  <Input.Icon name="Calendar" />
                  <Input.Content
                    placeholder="Data de validade (MM/AA)"
                    type="text"
                  />
                </Input.Root>
              </div>
              <div className="space-y-1">
                <Input.Root
                  width="xl:w-[22rem] lg:w-[30rem] md:w-[23.5rem] w-full"
                  height="h-14"
                >
                  <Input.Icon name="Asterisk" />
                  <Input.Content placeholder="CVV" type="text" />
                </Input.Root>
              </div>
            </div>
            <Button
              className="mx-auto my-5 bg-sky-500 p-4 font-bold text-white hover:bg-sky-600"
              size="xl"
            >
              <Icon name="Check" className="size-6" />
              Confirmar Pedido
            </Button>
          </div>
          <div className="flex flex-col gap-4 bg-zinc-100 p-4">
            <h2 className="text-xl font-bold text-sky-500">Resumo do pedido</h2>
            {items.map((item) => {
              return (
                <>
                  <ShopCartProduct
                    key={item.id}
                    product={item}
                    add={(item) => addItems(item)}
                    remove={(item) => removeItems(item)}
                    removeOne={(item) => removeOneItem(item)}
                  />
                </>
              );
            })}
            <div className="mt-8 h-px w-80 bg-zinc-200 md:w-[45rem] lg:w-[45rem] xl:w-[45rem]"></div>
            <div className="flex justify-between">
              <p className="text-xl font-bold">Total:</p>
              <p className="text-xl font-bold text-sky-500">
                R${' '}
                {items
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </ContentBoxed>
    </Page>
  );
}
