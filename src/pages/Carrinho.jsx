import { EmptyShopCart } from "@/components/EmptyShopCart";
import { ShopCartProduct } from "@/components/ShopCartProduct";
import { ContentBoxed } from "@/components/template/ContentBoxed";
import { Page } from "@/components/template/Page";
import { TotalShopCart } from "@/components/TotalShopCart";
import { Button } from "@/components/ui/button";
import { useShopCart } from "@/data/hooks/useShopCart";
import { useNavigate } from "react-router-dom";
import { getShopCart } from "@/api/endpoints";
import { useEffect, useState } from "react";

export function Carrinho() {
	const { items, addItems, removeItems, removeOneItem } = useShopCart();
	const navigate = useNavigate();

	const handleFinalizarCompra = () => {
		navigate("/finalizar");
	};

	const [shopCart, setShopCart] = useState([]);

	useEffect(() => {
		getShopCart().then((data) => {
			setShopCart(data);
		});
	}, [shopCart]);

	console.log("Carrinho", shopCart);
	return (
		<Page className="flex flex-col justify-center items-center">
			{items.length === 0 ? (
				<ContentBoxed className="">
					<EmptyShopCart />
				</ContentBoxed>
			) : (
				<>
					<TotalShopCart items={items} />
					<ContentBoxed className="bg-zinc-50 mt-10 p-4 flex flex-col gap-4 rounded-xl">
						{items.map((item) => {
							return (
								<>
									<ShopCartProduct key={item.id} product={item} add={(item) => addItems(item)} remove={(item) => removeItems(item)} removeOne={(item) => removeOneItem(item)} />
								</>
							);
						})}
					</ContentBoxed>
					<ContentBoxed className="my-8 flex">
						<Button className="bg-sky-500 hover:bg-sky-600 text-white font-bold p-4 mx-auto" size="xl" onClick={handleFinalizarCompra}>
							Finalizar Compra
						</Button>
					</ContentBoxed>
				</>
			)}
		</Page>
	);
}
