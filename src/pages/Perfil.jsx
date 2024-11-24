import { ContentBoxed } from "@/components/template/ContentBoxed";
import { Page } from "@/components/template/Page";
import { getAddresses, removeAddress } from "@/api/endpoints";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/Input";
import { Icon } from "@/components/Icon";
import { DialogProfile } from "@/components/DialogProfile";
import { AddAdressesForm } from "@/components/forms/AddAddressForm";
import { Button } from "@/components/ui/button";
import { EditAdressForm } from "@/components/forms/EditAddressForm";
export function Perfil() {
	const [addresses, setAddresses] = useState([]);
	const [isDialogCreateAddressOpen, setIsDialogCreateAddressOpen] = useState(false);
	const [isDialogEditAddressOpen, setIsDialogEditAddressOpen] = useState(false);

	const fetchAddresses = async () => {
		const data = await getAddresses();
		setAddresses(data);

		console.log("Endereços", data);
	};

	useEffect(() => {
		fetchAddresses();
	}, []);

	return (
		<Page className="flex justify-center items-center">
			<ContentBoxed className="space-y-10 mb-20">
				<div className="flex xl:flex-row lg:flex-col md:flex-col flex-col  gap-4  ">
					<div className="flex flex-col gap-4 p-4">
						<h2 className="text-xl text-sky-500 font-bold">Informações de envio</h2>

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
						<h2 className="text-xl   font-bold">Endereços</h2>
						<p className="flex items-center gap-2 text-sky-500 cursor-pointer" onClick={() => setIsDialogCreateAddressOpen(true)}>
							<Icon name="Plus" className="size-4" />
							Adicionar novo endereço
						</p>
						{addresses.map((address, index) => (
							<Card key={address.id} className="flex xl:flex-row lg:flex-row md:flex-row  gap-5 p-4 bg-zinc-50 ">
								<div className="flex items-center justify-center ">
									<CardContent className="p-0 flex items-center justify-center">
										<input type="radio" name="address" id={`address-${address.id}`} className="w-5 h-5 mx-4" defaultChecked={index === 0} />
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

										<div className="flex  xl:flex-col lg:flex-col md:flex-col flex-row gap-4 ">
											<Button className="bg-sky-500 hover:bg-sky-600 rounded text-white flex xl:mt-0 lg:mt-0 md:mt-0  mt-4"
												onClick={() => setIsDialogEditAddressOpen(true)}
											>
												<div className="flex gap-2 r">
													<Icon name="PenSquare" className="size-8 text-white" />
													<span>Editar</span>
												</div>
											</Button>

											<Button
												className="bg-sky-500 hover:bg-sky-600 rounded text-white flex  xl:mt-0 lg:mt-0 md:mt-0  mt-4"
												onClick={() => {
													removeAddress(address.id);
													fetchAddresses();
												}}>
												<div className="flex gap-2">
													<Icon name="Trash2" className="size-8 text-white" />
													<span>Remover</span>
												</div>
											</Button>
										</div>
									</div>
								</CardContent>
								<DialogProfile title="Editar endereço" description="Preencha os campos abaixo para editar o endereço" isOpen={isDialogEditAddressOpen} setIsOpen={setIsDialogEditAddressOpen}>
									<EditAdressForm setIsOpen={setIsDialogEditAddressOpen} onAddressEdited={fetchAddresses} cep_address={address} />
								</DialogProfile>
							</Card>
						))}
					</div>
				</div>
			</ContentBoxed>
			<DialogProfile title="Cadastrar endereço" description="Preencha os campos abaixo para cadastrar um novo endereço" isOpen={isDialogCreateAddressOpen} setIsOpen={setIsDialogCreateAddressOpen}>
				<AddAdressesForm setIsOpen={setIsDialogCreateAddressOpen} onAddressAdded={fetchAddresses} />
			</DialogProfile>
		</Page>
	);
}
