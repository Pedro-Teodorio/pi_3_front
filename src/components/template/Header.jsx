import { Link} from "react-router-dom";
import Logo from "/images/logo.svg";
import { Button } from "../ui/button";

import { useState } from "react";
import { Icon } from "@/components/Icon";

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
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
						<li>
							<Link className="hover:text-blue-400" to="#">
								Processadores
							</Link>
						</li>
						<li>
							<Link className="hover:text-blue-400" to="#">
								Placas de vídeo
							</Link>
						</li>
						<li>
							<Link className="hover:text-blue-400" to="#">
								Placas mãe
							</Link>
						</li>
						<li>
							<Link className="hover:text-blue-400" to="#">
								Memórias RAM
							</Link>
						</li>
						<li>
							<Link className="hover:text-blue-400" to="#">
								Armazenamento
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex items-center gap-6">
					<Link to="/cart">
						<Icon name="ShoppingCart" className="size-8 text-white" fill="white" />
					</Link>
					<Button className="bg-blue-500 hover:bg-blue-600  text-white rounded-xl" onClick={() => window.location.href = "/login"} >Entrar</Button>

					<Icon
						name={`${isOpen ? "X" : "MenuIcon"}`}
						className={`size-10 text-white cursor-pointer lg:hidden`}
						onClick={() => {
							const navLinks = document.querySelector('.nav-links');
							navLinks.style.top = isOpen ? '-100%' : '60px';
							
							setIsOpen(!isOpen);

						}}
					/>
				</div>
			</nav>
		</header>
	);
}
