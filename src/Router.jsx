import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Cadastrar } from "./pages/Cadastrar";
import { Produto } from "./pages/Produto";
import { Processadores } from "./pages/Processadores";
import { ProviderShopCart } from "./data/contexts/ContextShopCart";
import { Carrinho } from "./pages/Carrinho";
import { FinalizarCompra } from "./pages/FinalizarCompra";
import { Perfil } from "./pages/Perfil";

export function Router() {
	return (
		<ProviderShopCart>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/cadastrar" element={<Cadastrar />} />
				<Route path="/perfil" element={<Perfil />} />
				<Route path="/produto/:id/:name" element={<Produto />} />
				<Route path="/processadores" element={<Processadores />} />
				<Route path="/carrinho" element={<Carrinho />} />
				<Route path="/finalizar" element={<FinalizarCompra />} />
			</Routes>
		</ProviderShopCart>
	);
}
