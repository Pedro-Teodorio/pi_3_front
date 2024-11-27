import { getUser } from "@/api/endpoints";
import { DialogProfile } from "@/components/DialogProfile";
import { EditUserForm } from "@/components/forms/EditUserForm";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { useEffect, useState } from "react";


export function InformacoesPessoais() {
	const [isDialogEditUserOpen, setIsDialogEditUserOpen] = useState(false);
	const [data, setData] = useState({});
	

	const fetchData = async () => {
		const data = await getUser();
		setData(data);
	};

	const { user } = data;

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className=" flex flex-col gap-4 p-4 bg-zinc-50 xl:w-[65%] xl:flex xl:flex-col lg:w-[65%] lg:flex lg:flex-col md:w-full w-full rounded-xl h-fit">
			<h2 className="text-xl   font-bold">Informações Pessoais</h2>
			<Card className="flex xl:flex-row lg:flex-row md:flex-row w-full  gap-5 p-4 bg-zinc-50 ">
				<CardContent className="flex flex-col gap-4 flex-1 justify-center p-4">
					<div className="flex xl:flex-row lg:flex-row md:flex-row flex-col  gap-4">
						<div className="flex flex-col flex-1 gap-4">
							<p className="text-sky-500 font-bold xl:text-lg lg:text-lg  md:text-lg text-sm flex gap-2">
								<Icon name="User" className="size-6 text-zinc-950" />
								<span className=" text-zinc-950">Nome Completo:</span>
								<span>{user?.USUARIO_NOME}</span>
							</p>
							<p className="text-sky-500 font-bold xl:text-lg lg:text-lg  md:text-lg text-sm flex gap-2">
								<Icon name="Mail" className="size-6 text-zinc-950" />
								<span className=" text-zinc-950">Email:</span>
								<span>{user?.USUARIO_EMAIL}</span>
							</p>
							<p className="text-sky-500 font-bold xl:text-lg lg:text-lg  md:text-lg text-sm flex gap-2">
								<Icon name="IdCard" className="size-6 text-zinc-950" />
								<span className=" text-zinc-950">CPF:</span>
								<span>{user?.USUARIO_CPF}</span>
							</p>
						</div>

						<div className="flex  xl:flex-col lg:flex-col md:flex-col flex-row gap-4 items-center justify-center ">
							<Button className=" bg-sky-500 hover:bg-sky-600 rounded text-white flex xl:mt-0 lg:mt-0 md:mt-0  mt-4" onClick={() => {setIsDialogEditUserOpen(true)}}>
								<div className="flex gap-2 r">
									<Icon name="PenSquare" className="size-8 text-white" />
									<span className="xl:inline lg:inline md:inline">Editar</span>
								</div>
							</Button>
						</div>
					</div>
				</CardContent>
				<DialogProfile title="Editar Usúario" description="Preencha os campos abaixo para editar o usuário" isOpen={isDialogEditUserOpen} setIsOpen={setIsDialogEditUserOpen}>
					<EditUserForm setIsOpen={setIsDialogEditUserOpen} user={user} onUserEdited={fetchData} />
				</DialogProfile>
			</Card>
		</div>
	);
}
