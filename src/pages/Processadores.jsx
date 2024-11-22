import { ProductCard } from "@/components/ProductCard";
import { ContentBoxed } from "@/components/template/ContentBoxed";
import { Page } from "@/components/template/Page";
import { getProducts } from "@/api/endpoints";
import { useEffect, useState } from "react";

export function Processadores() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		getProducts().then((data) => {
			setProducts(data);
		});
	}, [products]);

	return (
		<Page>
			<ContentBoxed className="bg-zinc-50">
				<h1 className="text-center bg-blue-500 text-white text-2xl font-extrabold p-3">Processadores</h1>
				<div className="flex gap-4 ">
					<div className="col-span-1 bg-gray-200 w-auto ">Processador 1</div>
					<div className="flex flex-wrap gap-4 ">
						{products
							.filter((product) => product.category_id === 1)
							.map((product) => (
								<ProductCard key={product.id} product={product} className="xl:w-[22%] lg:w-[49%] md:w-[45%] w-[100%]" />
							))}
					</div>
				</div>
			</ContentBoxed>
		</Page>
	);
}
