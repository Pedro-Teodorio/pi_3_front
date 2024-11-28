import { finishOrder, getAddresses } from "@/api/endpoints";
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Input";
import { ShopCartProduct } from "@/components/ShopCartProduct";
import { ContentBoxed } from "@/components/template/ContentBoxed";
import { Page } from "@/components/template/Page";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useShopCart } from "@/data/hooks/useShopCart";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function FinalizarCompra() {
	const { items, addItems, removeItems, removeOneItem, clearCart } = useShopCart();
	const { register, handleSubmit } = useForm();

	const [addresses, setAddresses] = useState([]);
	const navigate = useNavigate();

	const fetchAddresses = async () => {
		const data = await getAddresses();
		setAddresses(data);

		console.log("Endereços", data);
	};

	useEffect(() => {
		fetchAddresses();
	}, []);

	const handleFinalizarCompra = async (e) => {
		try {
			const response = await finishOrder(e);

			if (response.status === 201) {
				console.log("Compra finalizada com sucesso:", response.data);
				clearCart();
				navigate("/perfil/informacoes-pessoais");
			}
		} catch (error) {
			console.error("Erro ao finalizar a compra:", error);
		}
	};
	return (
		<Page className="flex flex-col justify-center items-center">
			<ContentBoxed>
				<h1 className="text-center mt-8  xl:text-3xl lg:text-3xl md:text-2xl text-xl font-extrabold p-3">Finalizar Compra</h1>
			</ContentBoxed>
			<ContentBoxed className="bg-zinc-50 my-10 p-4 flex justify-center">
				<div className="flex xl:flex-row lg:flex-col-reverse md:flex-col-reverse flex-col-reverse  gap-4  ">
					<form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit(handleFinalizarCompra)}>
						<h2 className="text-xl text-sky-500 font-bold">Informações de envio</h2>
						{addresses.length === 0 ? (
							<Button className="bg-sky-500 hover:bg-sky-600 text-white font-bold p-4 " size="xl" onClick={() => navigate("/perfil")}>
								<Icon name="Plus" className="size-6" />
								Adicionar Endereço
							</Button>
						) : (
							addresses.map((address, index) => (
								<Card key={address.id} className="flex xl:flex-row lg:flex-row md:flex-row  gap-5 p-4 bg-zinc-50 ">
									<div className="flex items-center justify-center ">
										<CardContent className="p-0 flex items-center justify-center">
											<input value={address.id} type="radio" name="address" className="w-5 h-5 mx-4" defaultChecked={index === 0} {...register("endereco_id")} />
										</CardContent>
									</div>
									<CardContent className="flex flex-col gap-4 flex-1 justify-center p-4">
										<div className="flex xl:flex-row lg:flex-row md:flex-row flex-col  gap-4">
											<div className="flex flex-col flex-1">
												<div className="flex flex-1 items-center gap-2	">
													<p className="text-sky-500 font-bold xl:text-lg lg:text-lg  md:text-lg text-sm">{`${address.enderecoNome},${address.numero} ${address.cidade} - ${address.estado}`}</p>
												</div>
												<p className="font-bold text-zinc-700 text-sm">Logradouro: {address.logradouro}</p>
												<p className="font-bold text-zinc-700 text-sm">Complemento: {address.complemento}</p>
												<p className="font-bold text-zinc-500 text-sm">CEP:{address.cep}</p>
											</div>

											<div className="flex  xl:flex-col lg:flex-col md:flex-col flex-row gap-4 "></div>
										</div>
									</CardContent>
								</Card>
							))
						)}

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
						<Button type="submit" className="bg-sky-500 hover:bg-sky-600 text-white font-bold p-4 mx-auto my-5" size="xl">
							<Icon name="Check" className="size-6" />
							Confirmar Pedido
						</Button>
					</form>
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
