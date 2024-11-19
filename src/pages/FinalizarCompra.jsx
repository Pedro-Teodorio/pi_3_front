import { ContentBoxed } from "@/components/template/ContentBoxed";
import { Page } from "@/components/template/Page";

export function FinalizarCompra() {
	return (
		<Page className="flex flex-col justify-center items-center">
			<ContentBoxed className="bg-zinc-50">
                <h1 className="text-center bg-blue-500 text-white text-2xl font-extrabold p-3">Finalizar Compra</h1>
            </ContentBoxed>
		</Page>
	);
}
