import { Icon } from "@/components/Icon";
import { Input } from "@/components/Input";
import { Button } from "@/components/ui/button";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

export function InformacoesPessoais() {
    const {
		register,
		handleSubmit,
		watch,
		setError,
		clearErrors,
		formState: { errors },
	} = useForm();
    const password = watch("password");
	const confirmPassword = watch("confirmPassword");

    useEffect(() => {
		if (password && confirmPassword && password !== confirmPassword) {
			setError("confirmPassword", {
				type: "manual",
				message: "As senhas não coincidem",
			});
		} else {
			clearErrors("confirmPassword");
		}
	}, [password, confirmPassword, setError, clearErrors]);

	return (
		<div className=" flex flex-col gap-4 p-4 bg-zinc-50 xl:w-[65%] xl:flex xl:flex-col lg:w-[65%] lg:flex lg:flex-col md:w-full w-full rounded-xl ">
            <h2 className="text-xl   font-bold">Dados Pessoais</h2>
			<form className="space-y-4" onSubmit={handleSubmit}>
						<div className="space-y-1">
							<Input.Root mode="light" width="w-full" height="h-14">
								<Input.Icon name="UserRound" />
								<Input.Content placeholder="Nome Completo" type="text" register={{ ...register("name", { required: true }) }} />
							</Input.Root>
							{errors.name && <p className="text-red-500 text-sm">Campo nome é obrigatório</p>}
						</div>
						<div className="space-y-1">
							<Input.Root width="w-full" height="h-14">
								<Input.Icon name="IdCard" />
								<Input.Content placeholder="CPF" type="text" register={{ ...register("cpf", { required: true }) }} />
							</Input.Root>
							{errors.cpf && <p className="text-red-500 text-sm">Campo CPF é obrigatório</p>}
						</div>
						<div className="space-y-1">
							<Input.Root width="w-full" height="h-14">
								<Input.Icon name="Mail" />
								<Input.Content placeholder="Email" type="text" register={{ ...register("email", { required: true }) }} />
							</Input.Root>
							{errors.cpf && <p className="text-red-500 text-sm">Campo email é obrigatório</p>}
						</div>
						<div className="flex xl:flex-row lg:flex-row md:flex-row flex-col gap-4">
							<div className="space-y-1 w-full">
								<Input.Root width="w-full" height="h-14">
									<Input.Icon name="KeyRound" />
									<Input.Content placeholder="Senha" type="password" register={{ ...register("password", { required: true }) }} />
								</Input.Root>
								{errors.password && <p className="text-red-500 text-sm">Campo senha é obrigatório</p>}
							</div>
							<div className="space-y-1 w-full">
								<Input.Root width="w-full" height="h-14">
									<Input.Icon name="Check" />
									<Input.Content
										placeholder="Confirme a senha"
										type="password"
										register={{
											...register("confirmPassword", {
												validate: (value) => value === password || "As senhas não coincidem",
											}),
										}}
									/>
								</Input.Root>
								{errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
							</div>
						</div>
						<div className="w-full flex flex-col items-center justify-center gap-6">
							<Button className="bg-blue-500 hover:bg-blue-600   text-white" size="xl">
								<p className="text-base flex items-center ml-4  gap-2.5 ">Criar Conta</p>
								<Icon name="ArrowRight" className="size-4" />
							</Button>
							
						</div>
					</form>
		</div>
	);
}
