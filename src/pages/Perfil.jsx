import { ContentBoxed } from '@/components/template/ContentBoxed';
import { Page } from '@/components/template/Page';
import { getAddresses, removeAddress } from '@/api/endpoints';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/Input';
import { Icon } from '@/components/Icon';
import { DialogProfile } from '@/components/DialogProfile';
import { AddAdressesForm } from '@/components/forms/AddAddressForm';
import { Button } from '@/components/ui/button';
import { EditAdressForm } from '@/components/forms/EditAddressForm';
export function Perfil() {
  const [addresses, setAddresses] = useState([]);
  const [isDialogCreateAddressOpen, setIsDialogCreateAddressOpen] =
    useState(false);
  const [isDialogEditAddressOpen, setIsDialogEditAddressOpen] = useState(false);

  const fetchAddresses = async () => {
    const data = await getAddresses();
    setAddresses(data);

    console.log('Endereços', data);
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <Page className="flex items-center justify-center">
      <ContentBoxed className="mb-20 space-y-10">
        <div className="flex flex-col gap-4 md:flex-col lg:flex-col xl:flex-row">
          <div className="flex flex-col gap-4 p-4">
            <h2 className="text-xl font-bold text-sky-500">
              Informações de envio
            </h2>

            <div className="mt-8 h-px w-full bg-zinc-200 md:w-[45rem] lg:w-[45rem] xl:w-[45rem]"></div>
            <h2 className="text-xl font-bold text-sky-500">
              Informações de pagamento
            </h2>
            <Input.Root
              width="xl:w-[45rem] lg:w-full md:w-full w-full"
              height="h-14"
            >
              <Input.Icon name="WalletCards" />
              <Input.Content placeholder="Nome no cartão" type="text" />
            </Input.Root>
            <Input.Root
              width="xl:w-[45rem] lg:w-full md:w-full w-full"
              height="h-14"
            >
              <Input.Icon name="CreditCard" />
              <Input.Content placeholder="Número do cartão" type="text" />
            </Input.Root>
            <div className="flex flex-col gap-4 md:flex-row lg:flex-row xl:flex-row">
              <div className="space-y-1">
                <Input.Root
                  width="xl:w-[22rem] lg:w-[30rem] md:w-[23.5rem] w-full"
                  height="h-14"
                >
                  <Input.Icon name="Calendar" />
                  <Input.Content
                    placeholder="Data de validade (MM/AA)"
                    type="text"
                  />
                </Input.Root>
              </div>
              <div className="space-y-1">
                <Input.Root
                  width="xl:w-[22rem] lg:w-[30rem] md:w-[23.5rem] w-full"
                  height="h-14"
                >
                  <Input.Icon name="Asterisk" />
                  <Input.Content placeholder="CVV" type="text" />
                </Input.Root>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-zinc-100 p-4">
            <h2 className="text-xl font-bold">Endereços</h2>
            <p
              className="flex cursor-pointer items-center gap-2 text-sky-500"
              onClick={() => setIsDialogCreateAddressOpen(true)}
            >
              <Icon name="Plus" className="size-4" />
              Adicionar novo endereço
            </p>
            {addresses.map((address, index) => (
              <Card
                key={address.id}
                className="flex gap-5 bg-zinc-50 p-4 md:flex-row lg:flex-row xl:flex-row"
              >
                <div className="flex items-center justify-center">
                  <CardContent className="flex items-center justify-center p-0">
                    <input
                      type="radio"
                      name="address"
                      id={`address-${address.id}`}
                      className="mx-4 h-5 w-5"
                      defaultChecked={index === 0}
                    />
                  </CardContent>
                </div>
                <CardContent className="flex flex-1 flex-col justify-center gap-4 p-4">
                  <div className="flex flex-col gap-4 md:flex-row lg:flex-row xl:flex-row">
                    <div className="flex flex-1 flex-col">
                      <div className="flex flex-1 items-center gap-2">
                        <p className="text-sm font-bold text-sky-500 md:text-lg lg:text-lg xl:text-lg">{`${address.enderecoNome},${address.numero} ${address.cidade} - ${address.estado}`}</p>
                      </div>
                      <p className="text-sm font-bold text-zinc-700">
                        Logradouro: {address.logradouro}
                      </p>
                      <p className="text-sm font-bold text-zinc-700">
                        Complemento: {address.complemento}
                      </p>
                      <p className="text-sm font-bold text-zinc-500">
                        CEP:{address.cep}
                      </p>
                    </div>

                    <div className="flex flex-row gap-4 md:flex-col lg:flex-col xl:flex-col">
                      <Button
                        className="mt-4 flex rounded bg-sky-500 text-white hover:bg-sky-600 md:mt-0 lg:mt-0 xl:mt-0"
                        onClick={() => setIsDialogEditAddressOpen(true)}
                      >
                        <div className="r flex gap-2">
                          <Icon
                            name="PenSquare"
                            className="size-8 text-white"
                          />
                          <span>Editar</span>
                        </div>
                      </Button>

                      <Button
                        className="mt-4 flex rounded bg-sky-500 text-white hover:bg-sky-600 md:mt-0 lg:mt-0 xl:mt-0"
                        onClick={() => {
                          removeAddress(address.id);
                          fetchAddresses();
                        }}
                      >
                        <div className="flex gap-2">
                          <Icon name="Trash2" className="size-8 text-white" />
                          <span>Remover</span>
                        </div>
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <DialogProfile
                  title="Editar endereço"
                  description="Preencha os campos abaixo para editar o endereço"
                  isOpen={isDialogEditAddressOpen}
                  setIsOpen={setIsDialogEditAddressOpen}
                >
                  <EditAdressForm
                    setIsOpen={setIsDialogEditAddressOpen}
                    onAddressEdited={fetchAddresses}
                    cep_address={address}
                  />
                </DialogProfile>
              </Card>
            ))}
          </div>
        </div>
      </ContentBoxed>
      <DialogProfile
        title="Cadastrar endereço"
        description="Preencha os campos abaixo para cadastrar um novo endereço"
        isOpen={isDialogCreateAddressOpen}
        setIsOpen={setIsDialogCreateAddressOpen}
      >
        <AddAdressesForm
          setIsOpen={setIsDialogCreateAddressOpen}
          onAddressAdded={fetchAddresses}
        />
      </DialogProfile>
    </Page>
  );
}
