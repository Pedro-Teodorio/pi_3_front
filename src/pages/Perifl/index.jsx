import { ContentBoxed } from "@/components/template/ContentBoxed";
import { Page } from "@/components/template/Page";
import { Link, useLocation } from "react-router-dom";
import { Endereco } from "./Endereco";
import { Icon } from "@/components/Icon";
import { getUser } from "@/api/endpoints";
import { useEffect, useState } from "react";
import { InformacoesPessoais } from "./InformacoesPessoais";
import { Pedidos } from "./Pedidos";

export function Perfil() {
	const location = useLocation();
	const [data, setData] = useState({});

	const fetchData = async () => {
		const data = await getUser();
		setData(data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const { user } = data;



	const renderContent = () => {
		switch (location.pathname) {
			case "/perfil/endereco":
				return <Endereco />;
			case "/perfil/informacoes-pessoais":
				return <InformacoesPessoais />;
            case "/perfil/pedidos":
                return <Pedidos/>;
			default:
				return <InformacoesPessoais />;
		}
	};
	return (
		<Page className="flex justify-center items-center">
			<ContentBoxed className="space-y-10 mb-20 ">
				<div className="flex xl:flex-row lg:flex-row md:flex-col flex-col  gap-10 p-4 justify-center">
					<div className=" gap-4 p-8 bg-zinc-50 rounded-xl xl:flex xl:flex-col xl:w-[30%] lg:flex lg:flex-col lg:w-[30%] md:hidden hidden h-full">
						<div className="flex  gap-2 items-center ">
							<div className="h-14 w-14 border border-sky-500 rounded-full flex justify-center items-center">
								<p className="text-xl font-bold text-sky-500">{user?.USUARIO_NOME.split(" ")[0].charAt(0).toUpperCase()}</p>
							</div>
							<div>
								<h2 className="text-xl text-sky-500 font-bold">Olá, {user?.USUARIO_NOME.split(" ")[0]}</h2>
								<p className="text-zinc-500">Bem-vindo(a) a Área do Cliente</p>
							</div>
						</div>
						<div className="h-px bg-zinc-300"></div>
						<div className="flex flex-col gap-6 ">
							<Link to="/perfil/informacoes-pessoais">
								<h2 className="text-lg text-sky-500 font-bold flex items-center gap-2">
									<Icon name="User" />
									Informações pessoais
								</h2>
								<p className="text-sm text-zinc-500">Todos pedidos feitos na loja</p>
							</Link>
							<Link to="/perfil/endereco">
								<h2 className="text-lg text-sky-500 font-bold flex items-center gap-2">
									<Icon name="Map" />
									Endereço
								</h2>
								<p className="text-sm text-zinc-500">Meus endereços de entrega</p>
							</Link>
							<Link to="/perfil/pedidos">
								<h2 className="text-lg  text-sky-500 font-bold flex items-center gap-2">
									<Icon name="PackageOpen" />
									Pedidos
								</h2>
								<p className="text-sm text-zinc-500">Todos pedidos feitos na loja</p>
							</Link>
						</div>
					</div>
					{renderContent()}
				</div>
			</ContentBoxed>
		</Page>
	);
}
