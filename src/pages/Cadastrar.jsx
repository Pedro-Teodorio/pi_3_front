import { Icon } from "@/components/Icon";
import { Input } from "@/components/Input";
import { ContentBoxed } from "@/components/template/ContentBoxed";
import { Page } from "@/components/template/Page";
import { Button } from "@/components/ui/button";

export function Cadastrar() {
	return (
		<Page className="flex justify-center items-center">
			<ContentBoxed className="space-y-10 mb-20">
				<h1 className="text-3xl font-bold mt-32 text-blue-500 text-center">Criar Conta</h1>
				<div className="flex flex-col items-center justify-center gap-7 w-full">
					<form className="space-y-4">
						<Input.Root mode="light" width="xl:w-[45rem] lg:w-[45rem] md:w-[45rem] w-80" height="h-14">
							<Input.Icon name="UserRound" />
							<Input.Content placeholder="Nome Completo" type="email" />
						</Input.Root>
						<Input.Root width="xl:w-[45rem] lg:w-[45rem] md:w-[45rem] w-80" height="h-14">
							<Input.Icon name="IdCard" />
							<Input.Content placeholder="CPF" type="text" />
						</Input.Root>
						<div className=" flex xl:flex-row lg:flex-row md:flex-row flex-col gap-4">
							<Input.Root width="xl:w-[22rem] lg:w-[22rem] md:w-[22rem] w-80" height="h-14">
								<Input.Icon name="KeyRound" />
								<Input.Content placeholder="Senha" type="password" />
							</Input.Root>
							<Input.Root width="xl:w-[22rem] lg:w-[22rem] md:w-[22rem] w-80" height="h-14">
								<Input.Icon name="Check" />
								<Input.Content placeholder="Confirme a senha" type="password" />
							</Input.Root>
						</div>
						<div className="w-full flex flex-col items-center justify-center gap-6">
							<Button className="bg-blue-500 hover:bg-blue-600   text-white" size="xl">
								<p className="text-base flex items-center ml-4  gap-2.5 ">Criar Conta</p>
								<Icon name="ArrowRight" className="size-4" />
							</Button>
							<span className="text-sm flex gap-2">
								Ja possui conta?
								<a className="flex text-blue-400 font-semibold" href="/login">
									Acesse sua conta agora
									<Icon name="ArrowUpRight" className="size-4" />
								</a>
							</span>
						</div>
					</form>
				</div>
			</ContentBoxed>
		</Page>
	);
}
