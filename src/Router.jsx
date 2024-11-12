import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Cadastrar } from "./pages/Cadastrar";
import { Produto } from "./pages/Produto";
import { Processadores } from "./pages/Processadores";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/cadastrar" element={<Cadastrar />} />
			<Route path="/produto/:id/:name" element={<Produto />} />
			<Route path="/processadores" element={<Processadores />} />
		</Routes>
	);
}
