import { ContentBoxed } from "@/components/template/ContentBoxed";
import { Page } from "@/components/template/Page";
import { getAddresses } from "@/api/endpoints";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/Input";
export function Perfil() {
	const [addresses, setAddresses] = useState([]);
	useEffect(() => {
		getAddresses().then((data) => {
			setAddresses(data);
		});
	}, []);

	console.log(addresses);
	return (
		<Page className="flex justify-center items-center">
			<ContentBoxed className="space-y-10 mb-20">
				<div className="flex xl:flex-row lg:flex-col md:flex-col flex-col  gap-4  ">
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
					</div>
					<div className="bg-zinc-100 flex flex-col gap-4 p-4">
						<h2 className="text-xl  text-sky-500 font-bold">Endereços</h2>

						{addresses.map((address) => (
							<Card key={address.id} className="flex xl:flex-row lg:flex-row md:flex-row  gap-5 p-4 bg-zinc-50 ">
								<div className="flex items-center justify-center ">
									<CardContent className="p-0 flex items-center justify-center">
										<input type="radio" name="" id="" className="w-5 h-5 mx-4" />
									</CardContent>
								</div>
								<CardContent className="flex flex-col gap-4 flex-1 justify-center p-4">
									<div>
										<p className="text-sky-500 font-bold text-lg">{`${address.enderecoNome},${address.numero} ${address.cidade} - ${address.estado}`}</p>
										<p className="font-bold text-zinc-700 text-sm">Logradouro: {address.logradouro}</p>
										<p className="font-bold text-zinc-700 text-sm">Complemento: {address.complemento}</p>
										<p className="font-bold text-zinc-500 text-sm">CEP:{address.cep}</p>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</ContentBoxed>
		</Page>
	);
}
