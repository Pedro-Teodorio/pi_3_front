import { Icon } from "./Icon";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import PropTypes from "prop-types";

export function ShopCartProduct({ product, add, remove , removeOne}) {
	return (
		<Card className="flex xl:flex-row lg:flex-row md:flex-row flex-col gap-10 p-4 bg-zinc-50  ">
			<div className="xl:w-32 xl:h-32 lg:w-32 lg:h-32 md:h-32 md:w-32 flex items-center object-cover">
				<CardHeader>
					<img className="mix-blend-multiply object-cover" src={product.image} alt={product.name} />
				</CardHeader>
			</div>
			<CardContent className="flex flex-col gap-4 flex-1 justify-center">
				<div>
					<p className="font-bold text-zinc-700 text-lg">{product.name}</p>
					<p className="text-sky-500 font-bold text-xl">R$ {(product.price * product.quantity).toFixed(2)}</p>
				</div>
			</CardContent>
			<div className="flex  xl:flex-col lg:flex-col md:flex-col flex-row  items-center justify-center gap-4">
				<div className="flex flex-col items-center">
					<span className="text-xs text-zinc-400">Quant.</span>
					<div className="flex items-center justify-center">
						<Button className="bg-transparent shadow-none hover:bg-transparent size-10" onClick={() => remove?.(product)}>
							<Icon name="ChevronLeft" className="size-10 text-sky-500" />
						</Button>
						<span className="mx-4">{product.quantity}</span>
						<Button className="bg-transparent shadow-none hover:bg-transparent w-10 h-10" onClick={() => add?.(product)}>
							<Icon name="ChevronRight" className="text-sky-500 size-6" />
						</Button>
					</div>
				</div>

				<Button className="bg-sky-500 hover:bg-sky-600 rounded text-white flex items-center xl:mt-0 lg:mt-0 md:mt-0  mt-4" onClick={()=> removeOne?.(product)}>
					<div className="flex gap-2">
						<Icon name="Trash2" className="size-8 text-white" />
						<span>Remover</span>
					</div>
				</Button>
			</div>
		</Card>
	);
}

ShopCartProduct.propTypes = {
	add: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired,
    removeOne: PropTypes.func.isRequired,
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired,
		quantity: PropTypes.number.isRequired,
	}).isRequired,
};
