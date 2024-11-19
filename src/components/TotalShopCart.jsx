import { ContentBoxed } from "./template/ContentBoxed";

export function TotalShopCart(product) {
	const { items } = product;
	const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
	return (
		<ContentBoxed>
			<h1 className="text-center mt-8  xl:text-3xl lg:text-3xl md:text-2xl text-xl font-extrabold p-3">
				Confira os produtos que estão no carrinho <span className="text-sky-500">R$ {total}</span>
			</h1>
		</ContentBoxed>
	);
}
