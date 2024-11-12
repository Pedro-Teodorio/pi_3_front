import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/Icon";
import { ContentBoxed } from "@/components/template/ContentBoxed";

export function InfoSection() {
	return (
		<ContentBoxed className=" mt-8 rounded-lg flex gap-2 justify-between flex-wrap ">
			<Card className="p-4 flex justify-center items-center  text-center xl:w-[30%] lg:w-[30%] md:w-[100%] w-[100%]   shadow-lg  ">
				<CardContent className=" flex flex-col items-center gap-4">
					<Icon name="Keyboard" className="size-10 text-blue-500" />
					<CardTitle className="font-bold text-lg">Devolução gratís</CardTitle>
					<p className="text-zinc-500 text-sm">Se você não estiver satisfeito com sua compra, devolva-a gratuitamente dentro de 30 dias.</p>
				</CardContent>
			</Card>
			<Card className="p-4 flex justify-center items-center  text-center xl:w-[30%] lg:w-[30%] md:w-[100%] w-[100%]    shadow-lg   ">
				<CardContent className=" flex flex-col items-center gap-4">
					<Icon name="CalendarDaysIcon" className="size-10 text-blue-500" />
					<CardTitle className="font-bold text-lg">Entrega no mesmo dia</CardTitle>
					<p className="text-zinc-500 text-sm">Oferecemos um serviço de entrega que nunca foi feito antes. Faça o checkout hoje e receba seus produtos em poucas horas.</p>
				</CardContent>
			</Card>
			<Card className="p-4 flex justify-center items-center  text-center xl:w-[30%] lg:w-[30%] md:w-[100%] w-[100%]   shadow-lg  ">
				<CardContent className=" flex flex-col items-center gap-4">
					<Icon name="Earth" className="size-10 text-blue-500" />
					<CardTitle className="font-bold text-lg">Para o planeta</CardTitle>
					<p className="text-zinc-500 text-sm">Prometemos 1% das vendas para a preservação e restauração do ambiente natural.</p>
				</CardContent>
			</Card>
		</ContentBoxed>
	);
}
