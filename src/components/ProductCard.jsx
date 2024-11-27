import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useShopCart } from "@/data/hooks/useShopCart";
export function ProductCard({ product, className }) {
	const { id, name, price, image } = product;
	const { addItems } = useShopCart();

	const nameUrl = name.toLowerCase().replace(/[, ]+/g, "-");
	return (
		<Card className={`xl:w-[23%] lg:w-[49%] md:w-[45%] w-[100%] p-4 flex flex-col items-center justify-center shadow-md ${className}`}>
			<Link className="flex flex-col items-center justify-center" to={`/produto/${id}/${nameUrl}`} state={product}>
				<div className=" w-72 h-72 flex items-center">
					<CardHeader className="mx-auto">
						<img className="mix-blend-multiply object-cover w-full h-full" src={image} alt={name} />
					</CardHeader>
				</div>
				<CardContent className="flex flex-col gap-4 p-0">
					<p className="font-extrabold text-zinc-700 text-sm">{name}</p>
					<CardTitle className="text-xl text-sky-500 font-bold text-[20px]">R$ {price}</CardTitle>
				</CardContent>
			</Link>
			<Button className="w-full mt-4 bg-sky-500 hover:bg-sky-600 flex items-center justify-between gap-4 text-white rounded-xl font-bold " onClick={()=> addItems(product)}>
				<p>Adicionar ao carrinho</p>
				<ChevronRight className="size-8" />
			</Button>
		</Card>
	);
}

ProductCard.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
	}).isRequired,
	className: PropTypes.string,
};
