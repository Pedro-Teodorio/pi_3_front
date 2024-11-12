import { Icon } from "@/components/Icon";
import { ContentBoxed } from "@/components/template/ContentBoxed";
import { Page } from "@/components/template/Page";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { useLocation } from "react-router-dom";

export function Produto() {
	let { state } = useLocation();
	let { name, description, price, image } = state;
	let inStock = 1;

	return (
		<Page className="flex justify-center items-center">
			<ContentBoxed className="flex items-center justify-center gap-10 flex-wrap ">
				<div className="xl:w-[40%] lg:w-[65%] md:w-[80%] w-full">
					<Card className="w-full h-[520px] flex justify-center items-center">
						<div className=" w-96 h-96 flex items-center">
							<CardHeader>
								<img className="mix-blend-multiply object-cover" src={image} alt={name} />
							</CardHeader>
						</div>
					</Card>
				</div>

				<div className="flex flex-col gap-4">
					<div className=" xl:w-[640px] lg:w-[640px] md:w-[640px]  sm:w-full">
						<h1 className="text-2xl font-bold">{name}</h1>
						<p className=" text-gray-500 ">{description}</p>
					</div>
					{inStock > 0 ? <p className="text-blue-900 font-extrabold">Produto disponivel</p> : <p className="text-red-500 font-extrabold">Produto indisponivel</p>}
					<p className="text-3xl font-bold text-blue-500">R$ {price.toFixed(2)}</p>

					{inStock > 0 ? (
						<Button className="bg-blue-500 hover:bg-blue-600   text-white" size="xl">
							<Icon name="ShoppingCart" className="size-4" />
							<p className="text-base flex items-center">Comprar</p>
						</Button>
					) : (
						<Button className="bg-blue-500 hover:bg-blue-600   text-white" size="xl" disabled>
							<Icon name="CircleX" className="size-4" />
							<p className="text-base flex items-center">Esgotado</p>
						</Button>
					)}
				</div>
			</ContentBoxed>
		</Page>
	);
}
