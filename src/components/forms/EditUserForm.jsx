import { Input } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { editUser } from "@/api/endpoints";

export function EditUserForm({ setIsOpen, onUserEdited, user }) {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			setValue("name", user?.USUARIO_NOME);
			setValue("cpf", user?.USUARIO_CPF);
			setValue("email", user?.USUARIO_EMAIL);
		}
	}, [setValue, user]);

	const onSubmit = (data) => {
		const { name, cpf, email } = data;

		const body = {
			USUARIO_NOME: name,
			USUARIO_CPF: cpf,
			USUARIO_EMAIL: email,
		};
	
		const response = editUser(body);
	
		if (response) {
			onUserEdited();
			setIsOpen(false);
			navigate("/perfil/informacoes-pessoais");
		}
	};

	return (
		<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
			<div className="space-y-1 w-full">
				<Input.Root mode="light" width="" height="h-14">
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
				<Input.Root width=" w-full" height="h-14">
					<Input.Icon name="Mail" />
					<Input.Content placeholder="Email" type="text" register={{ ...register("email", { required: true }) }} />
				</Input.Root>
				{errors.cpf && <p className="text-red-500 text-sm">Campo email é obrigatório</p>}
			</div>

			<div className="w-full flex flex-col items-center justify-center gap-6">
				<Button className="bg-blue-500 hover:bg-blue-600   text-white" size="xl">
					<p className="text-base flex items-center   gap-2.5 ">Editar</p>
				</Button>
			</div>
		</form>
	);
}
EditUserForm.propTypes = {
	setIsOpen: PropTypes.func.isRequired,
	onUserEdited: PropTypes.func.isRequired,
	user: PropTypes.shape({
		USUARIO_NOME: PropTypes.string,
		USUARIO_CPF: PropTypes.string,
		USUARIO_EMAIL: PropTypes.string,
	}),
};
