/* eslint-disable no-unused-vars */
import instance from "@/api/axios";
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Input";
import { ContentBoxed } from "@/components/template/ContentBoxed";
import { Page } from "@/components/template/Page";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function Login() {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm();

	const handleLogin = async (e) => {
		try {
			const { email, password } = e;
			const response = await instance.post("/api/login", { email, password });
			if (response.status === 200) {
				const token = response.data.token;
				localStorage.setItem("token", token);
				window.location.href = "/";
			}
		} catch (error) {
			if (error.response) {
				if (error.response.status === 401) {
					alert("Erro de autenticação: email ou senha inválidos.");
				}
			} else if (error.request) {
				alert("Servidor indisponível. Verifique sua conexão.");
			} else {
				alert("Erro desconhecido:", error.message);
			}
		}
	};

	return (
		<Page className="flex justify-center items-center">
			<ContentBoxed className="space-y-10 mb-20">
				<h1 className="text-3xl font-bold mt-32 text-blue-500 text-center">Inicie sessão para finalizar a compra com rapidez.</h1>
				<div className="flex flex-col items-center justify-center gap-7 w-full">
					<h2 className="text-2xl font-semibold text-blue-400">Inicie a sessão</h2>
					<form className="space-y-7" onSubmit={handleSubmit(handleLogin)}>
						<div className="space-y-2">
							<Input.Root mode="light" width="xl:w-[576px] lg:w-[576px] md:w-[576px] w-80" height="h-14">
								<Input.Icon name="Mail" />
								<Input.Content placeholder="Email" type="email" register={{ ...register("email", { required: true }) }} />
							</Input.Root>
							{errors.email && <p className="text-red-500 text-sm">Campo email é obrigatório</p>}
						</div>

						<div className="space-y-2">
							<Input.Root width="xl:w-[576px] lg:w-[576px] md:w-[576px] w-80" height="h-14">
								<Input.Icon name="KeyRound" />
								<Input.Content placeholder="Senha" type="password" register={{ ...register("password", { required: true }) }} />
							</Input.Root>
							{errors.password && <p className="text-red-500 text-sm">Campo senha é obrigatório</p>}
						</div>

						<div className="w-full flex flex-col items-center justify-center gap-6">
							<Button className="bg-blue-500 hover:bg-blue-600 text-white" size="xl" type="submit">
								<p className="text-base flex items-center ml-4 gap-2.5">Entrar</p>
								<Icon name="ArrowRight" className="size-4" />
							</Button>
							<span className="text-sm flex gap-2">
								Não tem conta ainda?
								<a className="flex text-blue-400 font-semibold" href="/cadastrar">
									Crie sua conta agora
									<Icon name="ArrowUpRight" className="size-4" />
								</a>
							</span>
						</div>
					</form>
					{errors.root?.serverError && <p>{errors.root.serverError.message}</p>}
				</div>
			</ContentBoxed>
		</Page>
	);
}
