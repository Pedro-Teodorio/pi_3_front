import { Link, useNavigate } from "react-router-dom";
import Logo from "/images/logo.svg";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import instance from "@/api/axios";
import { useShopCart } from "@/data/hooks/useShopCart";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [categorias, setCategorias] = useState([]);
	const { quantityItems } = useShopCart();
	const navigate = useNavigate();

	const token = localStorage.getItem("token");
	
	const removeToken = () => {
		localStorage.removeItem("token");
		navigate("/");
	};

	const profileRedirect = () => {
		navigate("/perfil/informacoes-pessoais");
	};

	useEffect(() => {
		const fetchCategorias = async () => {
			try {
				const response = await instance.get("/api/categorias");
				setCategorias(response.data);

				// Use o valor diretamente da resposta se quiser logar imediatamente
				console.log("Categorias carregadas:", response.data);
			} catch (error) {
				console.error("Erro ao buscar categorias:", error);
			}
		};

		fetchCategorias();
	}, []);

	return (
		<header className="bg-zinc-900">
			<nav className="flex justify-between items-center max-w-screen-2xl mx-auto p-4">
				<div>
					<Link to="/">
						<img className="w-10 h-10" src={Logo} alt="..." />
					</Link>
				</div>
				<div className="z-20 nav-links duration-500 lg:static  absolute bg-zinc-900 lg:min-h-fit md:min-h-[30vh]  min-h-[45vh] left-0 top-[-100%] lg:w-auto w-full flex items-center px-5">
					<ul className="text-white font-semibold flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] gap-8">
						{categorias.slice(0, 4).map((categoria) => {
							return (
								<li key={categoria.id}>
									<Link className="hover:text-blue-400" to="#">
										{categoria.nome}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="flex items-center gap-6">
					<Link to="/carrinho">
						<div className=" flex relative">
							<Icon name="ShoppingCart" className="size-8 text-white" fill="white" />
							{quantityItems > 0 && <span className="absolute -top-1.5 -right-2 bg-sky-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{quantityItems}</span>}
						</div>
					</Link>
					{token ? (
						<DropdownMenu>
							<DropdownMenuTrigger className="outline-none ">
								<Icon name="User" className="text-zinc-50 size-8" />
							</DropdownMenuTrigger>
							<DropdownMenuContent className="bg-zinc-900 border-0 text-white hover:text-sky-500">
								<DropdownMenuLabel className="text-white">Minha conta</DropdownMenuLabel>
								<DropdownMenuSeparator className="bg-white" />
								<DropdownMenuItem onClick={profileRedirect} className="text-white hover:text-sky-500 font-bold">
									Perfil
								</DropdownMenuItem>
								<DropdownMenuItem onClick={removeToken} className="text-white hover:text-sky-500 font-bold">
									Sair
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<Button className="bg-blue-500 hover:bg-blue-600  text-white rounded-xl" onClick={() => navigate("/login")}>
							Entrar
						</Button>
					)}

					<Icon
						name={`${isOpen ? "X" : "MenuIcon"}`}
						className={`size-10 text-white cursor-pointer lg:hidden`}
						onClick={() => {
							const navLinks = document.querySelector(".nav-links");
							navLinks.style.top = isOpen ? "-100%" : "60px";

							setIsOpen(!isOpen);
						}}
					/>
				</div>
			</nav>
		</header>
	);
}
