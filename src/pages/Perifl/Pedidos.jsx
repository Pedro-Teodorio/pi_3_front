import { getOrders } from "@/api/endpoints";
import { Icon } from "@/components/Icon";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";

export function Pedidos() {
	const [pedidos, setPedidos] = useState([]);
	const fetchPedidos = async () => {
		const data = await getOrders();
		setPedidos(data);
	};
	useEffect(() => {
		fetchPedidos();
	}, []);
	console.log(pedidos);
	return (
		<div className=" flex flex-col gap-4 p-4 bg-zinc-50 xl:w-[65%] xl:flex xl:flex-col lg:w-[65%] lg:flex lg:flex-col md:w-full w-full rounded-xl ">
			<h2 className="text-xl font-bold">Pedidos</h2>
			{pedidos.map((pedido) => {
				const { itens } = pedido;
				const formattedDate = new Date(pedido.PEDIDO_DATA).toLocaleDateString("pt-BR");
				return (
					<Card key={pedido.PEDIDO_ID} className="flex xl:flex-row lg:flex-row md:flex-row flex-col gap-2 p-4 bg-zinc-50 ">
						<CardHeader className="flex xl:flex-row lg:flex-row md:flex-row flex-col flex-1 gap-4 items-center">
							<div>
								<Icon name="Package" className="size-8 text-sky-500" />
							</div>
							<div>
								<p className="font-bold">Numero do pedido: {`FLPP${pedido.PEDIDO_ID}`}</p>
								<p className="text-sky-500 font-bold xl:text-lg lg:text-lg  md:text-lg text-xs">{`Data de confirmação  : ${formattedDate}`}</p>
							</div>
						</CardHeader>
						<CardContent className="flex flex-col gap-4 flex-1 justify-center p-4">
							<div 
                            className="flex xl:flex-col lg:flex-col md:flex-col flex-col gap-2 
                            xl:justify-start lg:items-start lg:justify-start md:items-start md:justify-start xl:items-start justify-center items-center">
								<p className="font-bold text-zinc-700 ">Status: {pedido.STATUS_ID}</p>
								<p className="font-bold text-zinc-700 ">
									Total:<span className="text-sky-500"> R$ {itens.reduce((acc, item) => acc + item.ITEM_PRECO * item.ITEM_QTD, 0).toFixed(2)}</span>
								</p>
							</div>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
}
