import instance from "@/api/axios";
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Input";
import { ContentBoxed } from "@/components/template/ContentBoxed";
import { Page } from "@/components/template/Page";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function Cadastrar() {
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
	const navigate = useNavigate();

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

	const onSubmit = (data) => {
		const { name, cpf, email, password } = data;

		instance
			.post("/api/register", {
				name,
				cpf,
				email,
				password,
			})
			.then((response) => {
				const token = response.data.token;
				localStorage.setItem("token", token);
				navigate("/perfil");
			})
			.catch((error) => {
				console.error("Erro ao cadastrar usuário:", error);
				alert("Erro ao tentar se cadastrar. Tente novamente mais tarde.");
			});
	};

	return (
		<Page className="flex justify-center items-center">
			<ContentBoxed className="space-y-10 mb-20">
				<h1 className="text-3xl font-bold mt-32 text-blue-500 text-center">Criar Conta</h1>
				<div className="flex flex-col items-center justify-center gap-7 w-full">
					<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
						<div className="space-y-1">
							<Input.Root mode="light" width="xl:w-[45rem] lg:w-[45rem] md:w-[45rem] w-80" height="h-14">
								<Input.Icon name="UserRound" />
								<Input.Content placeholder="Nome Completo" type="text" register={{ ...register("name", { required: true }) }} />
							</Input.Root>
							{errors.name && <p className="text-red-500 text-sm">Campo nome é obrigatório</p>}
						</div>
						<div className="space-y-1">
							<Input.Root width="xl:w-[45rem] lg:w-[45rem] md:w-[45rem] w-80" height="h-14">
								<Input.Icon name="IdCard" />
								<Input.Content placeholder="CPF" type="text" register={{ ...register("cpf", { required: true }) }} />
							</Input.Root>
							{errors.cpf && <p className="text-red-500 text-sm">Campo CPF é obrigatório</p>}
						</div>
						<div className="space-y-1">
							<Input.Root width="xl:w-[45rem] lg:w-[45rem] md:w-[45rem] w-80" height="h-14">
								<Input.Icon name="Mail" />
								<Input.Content placeholder="Email" type="text" register={{ ...register("email", { required: true }) }} />
							</Input.Root>
							{errors.cpf && <p className="text-red-500 text-sm">Campo email é obrigatório</p>}
						</div>
						<div className=" flex xl:flex-row lg:flex-row md:flex-row flex-col gap-4">
							<div className="space-y-1">
								<Input.Root width="xl:w-[22rem] lg:w-[22rem] md:w-[22rem] w-80" height="h-14">
									<Input.Icon name="KeyRound" />
									<Input.Content placeholder="Senha" type="password" register={{ ...register("password", { required: true }) }} />
								</Input.Root>
								{errors.password && <p className="text-red-500 text-sm">Campo senha é obrigatório</p>}
							</div>
							<div className="space-y-1">
								<Input.Root width="xl:w-[22rem] lg:w-[22rem] md:w-[22rem] w-80" height="h-14">
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
