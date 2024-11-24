import { Input } from "@/components/Input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import instance from "@/api/axios";
import { addAddress } from "@/api/endpoints";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
export function AddAdressesForm({ setIsOpen, onAddressAdded }) {
	const {
		handleSubmit,
		register,
		watch,
		formState: { errors },
		setValue,
		setError,
	} = useForm();

	const cep = watch("cep");
	const [showFields, setShowFields] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchAddress = async (cep) => {
			try {
				const response = await instance.get(`https://viacep.com.br/ws/${cep}/json/`);
				if (response.data.erro) {
					setShowFields(false);
					setError("cep", {
						type: "manual",
						message: "CEP inválido",
					});
				} else {
					setShowFields(true);
					setValue("estado", response.data.uf);
					setValue("cidade", response.data.localidade);
					setValue("logradouro", response.data.logradouro);
					setValue("nome", response.data.logradouro);
				}
			} catch (error) {
				console.error("Erro ao buscar o CEP:", error);
				setError("cep", {
					type: "manual",
					message: "Erro ao buscar o CEP",
				});
				setShowFields(false);
			}
		};

		if (cep && cep.length === 8) {
			fetchAddress(cep);
		} else {
			setShowFields(false);
		}
	}, [cep, setValue, setError]);

	const handleAddAdress = async (data) => {
		try {
			const response = await addAddress(data);
			if (response.status === 201) {
				setIsOpen(false);
				onAddressAdded();
				navigate("/perfil");
			} else {
				console.log("Erro ao adicionar o endereço ao banco de dados", response.status);
			}
		} catch (error) {
			console.error("Erro ao adicionar o endereço:", error);
		}
	};
	return (
		<form onSubmit={handleSubmit(handleAddAdress)} className="flex flex-col gap-4">
			<div className="space-y-2">
				<Input.Root width=" lg:w-full md:w-full w-full" height="h-14">
					<Input.Icon name="LocateFixed" />
					<Input.Content
						placeholder="CEP"
						type="text"
						maxLength={8}
						register={{
							...register("cep", {
								required: "Campo CEP é obrigatório",
								maxLength: {
									value: 8,
									message: "CEP deve ter 8 dígitos",
								},
							}),
						}}
					/>
				</Input.Root>
				{errors.cep && <p className="text-red-500 text-sm">{errors.cep.message}</p>}
			</div>
			{showFields && (
				<>
					<div className="space-y-2">
						<Input.Root width=" lg:w-full md:w-full w-full" height="h-14">
							<Input.Icon name="MapPin" />
							<Input.Content placeholder="Estado" type="text" register={{ ...register("estado", { required: "Campo Estado é obrigatório" }) }} />
						</Input.Root>
						{errors.estado && <p className="text-red-500 text-sm">{errors.estado.message}</p>}
					</div>

					<div className="space-y-2">
						<Input.Root width=" lg:w-full md:w-full w-full" height="h-14">
							<Input.Icon name="Home" />
							<Input.Content placeholder="Endereço" type="text" register={{ ...register("logradouro", { required: "Campo Logradouro é obrigatório" }) }} />
						</Input.Root>
						{errors.logradouro && <p className="text-red-500 text-sm">{errors.logradouro.message}</p>}
					</div>

					<div className="space-y-2">
						<Input.Root width=" lg:w-w-full md:w-w-full w-full" height="h-14">
							<Input.Icon name="Hash" />
							<Input.Content placeholder="Número" type="number" register={{ ...register("numero", { required: "Campo Número é obrigatório" }) }} />
						</Input.Root>
						{errors.numero && <p className="text-red-500 text-sm">{errors.numero.message}</p>}
					</div>

					<div className="space-y-2">
						<Input.Root width=" lg:w-full md:w-full w-full" height="h-14">
							<Input.Icon name="Hotel" />
							<Input.Content placeholder="Cidade" type="text" register={{ ...register("cidade", { required: "Campo Cidade é obrigatório" }) }} />
						</Input.Root>
						{errors.cidade && <p className="text-red-500 text-sm">{errors.cidade.message}</p>}
					</div>

					<div className="space-y-2">
						<Input.Root width=" lg:w-full md:w-full w-full" height="h-14">
							<Input.Icon name="Ellipsis" />
							<Input.Content placeholder="Complemento" type="text" register={{ ...register("complemento") }} />
						</Input.Root>
					</div>
					<Button className="w-full bg-sky-500 hover:bg-sky-600 text-white rounded-xl" type="submit">
						Adicionar
					</Button>
				</>
			)}
		</form>
	);
}

AddAdressesForm.propTypes = {
	setIsOpen: PropTypes.func,
	onAddressAdded: PropTypes.func,
};
