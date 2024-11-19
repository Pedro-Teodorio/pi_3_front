import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Cadastrar } from "./pages/Cadastrar";
import { Produto } from "./pages/Produto";
import { Processadores } from "./pages/Processadores";
import { ProviderShopCart } from "./data/contexts/ContextShopCart";
import { Carrinho } from "./pages/Carrinho";

export function Router() {
	return (
		<ProviderShopCart>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/cadastrar" element={<Cadastrar />} />
				<Route path="carrinho" element={<Carrinho />} />
				<Route path="/produto/:id/:name" element={<Produto />} />
				<Route path="/processadores" element={<Processadores />} />
			</Routes>
		</ProviderShopCart>
	);
}
