import { Icon } from "@/components/Icon";
import { Input } from "@/components/Input";
import { ShopCartProduct } from "@/components/ShopCartProduct";
import { ContentBoxed } from "@/components/template/ContentBoxed";
import { Page } from "@/components/template/Page";
import { Button } from "@/components/ui/button";
import { useShopCart } from "@/data/hooks/useShopCart";

export function FinalizarCompra() {
	const { items, addItems, removeItems, removeOneItem } = useShopCart();
	return (
		<Page className="flex flex-col justify-center items-center">
			<ContentBoxed>
				<h1 className="text-center mt-8  xl:text-3xl lg:text-3xl md:text-2xl text-xl font-extrabold p-3">Finalizar Compra</h1>
			</ContentBoxed>
			<ContentBoxed className="bg-zinc-50 my-10 p-4 flex justify-center">
				<div className="flex xl:flex-row lg:flex-col-reverse md:flex-col-reverse flex-col-reverse  gap-4  ">
					<div className="flex flex-col gap-4 p-4">
						<h2 className="text-xl text-sky-500 font-bold">Informações de envio</h2>
						<Input.Root width="xl:w-[45rem] lg:w-full md:w-full w-full" height="h-14">
							<Input.Icon name="LocateFixed" />
							<Input.Content placeholder="CEP" type="text" />
						</Input.Root>
						<Input.Root width="xl:w-[45rem] lg:w-full md:w-full w-full" height="h-14">
							<Input.Icon name="MapPin" />
							<Input.Content placeholder="Estado" type="text" />
						</Input.Root>
						<Input.Root width="xl:w-[45rem] lg:w-full md:w-full w-full" height="h-14">
							<Input.Icon name="Home" />
							<Input.Content placeholder="Estado" type="text" />
						</Input.Root>
						<Input.Root width="xl:w-[45rem] lg:w-w-full md:w-w-full w-full" height="h-14">
							<Input.Icon name="Hash" />
							<Input.Content placeholder="Número" type="number" />
						</Input.Root>
						<Input.Root width="xl:w-[45rem] lg:w-full md:w-full w-full" height="h-14">
							<Input.Icon name="Hotel" />
							<Input.Content placeholder="Cidade" type="text" />
						</Input.Root>
						<Input.Root width="xl:w-[45rem] lg:w-full md:w-full w-full" height="h-14">
							<Input.Icon name="Milestone" />
							<Input.Content placeholder="Logradouro" type="text" />
						</Input.Root>
						<Input.Root width="xl:w-[45rem] lg:w-full md:w-full w-full" height="h-14">
							<Input.Icon name="Ellipsis" />
							<Input.Content placeholder="Complemento" type="text" />
						</Input.Root>
						<div className="xl:w-[45rem] lg:w-[45rem] md:w-[45rem] w-full h-px mt-8 bg-zinc-200"></div>
						<h2 className="text-xl  text-sky-500 font-bold">Informações de pagamento</h2>
						<Input.Root width="xl:w-[45rem] lg:w-full md:w-full w-full" height="h-14">
							<Input.Icon name="WalletCards" />
							<Input.Content placeholder="Nome no cartão" type="text" />
						</Input.Root>
						<Input.Root width="xl:w-[45rem] lg:w-full md:w-full w-full" height="h-14">
							<Input.Icon name="CreditCard" />
							<Input.Content placeholder="Número do cartão" type="text" />
						</Input.Root>
						<div className=" flex xl:flex-row lg:flex-row md:flex-row flex-col gap-4">
							<div className="space-y-1">
								<Input.Root width="xl:w-[22rem] lg:w-[30rem] md:w-[23.5rem] w-full" height="h-14">
									<Input.Icon name="Calendar" />
									<Input.Content placeholder="Data de validade (MM/AA)" type="text" />
								</Input.Root>
							</div>
							<div className="space-y-1">
								<Input.Root width="xl:w-[22rem] lg:w-[30rem] md:w-[23.5rem] w-full" height="h-14">
									<Input.Icon name="Asterisk" />
									<Input.Content placeholder="CVV" type="text" />
								</Input.Root>
							</div>
						</div>
						<Button className="bg-sky-500 hover:bg-sky-600 text-white font-bold p-4 mx-auto my-5" size="xl">
							<Icon name="Check" className="size-6" />
							Confirmar Pedido
						</Button>
					</div>
					<div className="bg-zinc-100 flex flex-col gap-4 p-4">
						<h2 className="text-xl  text-sky-500 font-bold">Resumo do pedido</h2>
						{items.map((item) => {
							return (
								<>
									<ShopCartProduct key={item.id} product={item} add={(item) => addItems(item)} remove={(item) => removeItems(item)} removeOne={(item) => removeOneItem(item)} />
								</>
							);
						})}
						<div className="xl:w-[45rem] lg:w-[45rem] md:w-[45rem] w-80 h-px mt-8 bg-zinc-200"></div>
						<div className="flex justify-between">
							<p className="text-xl font-bold">Total:</p>
							<p className="text-xl text-sky-500 font-bold">R$ {items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
						</div>
					</div>
				</div>
			</ContentBoxed>
		</Page>
	);
}
