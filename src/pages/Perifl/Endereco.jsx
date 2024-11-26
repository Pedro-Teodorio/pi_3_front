import { getAddresses, removeAddress } from "@/api/endpoints";
import { DialogProfile } from "@/components/DialogProfile";
import { AddAdressesForm } from "@/components/forms/AddAddressForm";
import { EditAdressForm } from "@/components/forms/EditAddressForm";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

export function Endereco() {
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
		<div className=" flex flex-col gap-4 p-4 bg-zinc-50 xl:w-[65%] xl:flex xl:flex-col lg:w-[65%] lg:flex lg:flex-col md:w-full w-full rounded-xl ">
			<h2 className="text-xl   font-bold">Endereços</h2>
			<p className="flex items-center gap-2 text-sky-500 cursor-pointer" onClick={() => setIsDialogCreateAddressOpen(true)}>
				<Icon name="Plus" className="size-4" />
				Adicionar novo endereço
			</p>
			{addresses?.map((address, index) => (
				<Card key={address.id} className="flex xl:flex-row lg:flex-row md:flex-row w-full  gap-5 p-4 bg-zinc-50 ">
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
								<Button className=" bg-sky-500 hover:bg-sky-600 rounded text-white flex xl:mt-0 lg:mt-0 md:mt-0  mt-4" onClick={() => setIsDialogEditAddressOpen(true)}>
									<div className="flex gap-2 r">
										<Icon name="PenSquare" className="size-8 text-white" />
										<span className="xl:inline lg:inline md:inline hidden">Editar</span>
									</div>
								</Button>

								<Button
									className="bg-sky-500  hover:bg-sky-600 rounded text-white flex  xl:mt-0 lg:mt-0 md:mt-0  mt-4"
									onClick={() => {
										removeAddress(address.id);
										fetchAddresses();
									}}>
									<div className="flex gap-2">
										<Icon name="Trash2" className="size-8 text-white" />
										<span className="xl:inline lg:inline md:inline hidden">Remover</span>
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
            <DialogProfile title="Cadastrar endereço" description="Preencha os campos abaixo para cadastrar um novo endereço" isOpen={isDialogCreateAddressOpen} setIsOpen={setIsDialogCreateAddressOpen}>
						<AddAdressesForm setIsOpen={setIsDialogCreateAddressOpen} onAddressAdded={fetchAddresses} />
					</DialogProfile>
		</div>
	);
}
