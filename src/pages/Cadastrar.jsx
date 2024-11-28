import instance from '@/api/axios';
import { Icon } from '@/components/Icon';
import { Input } from '@/components/Input';
import { ContentBoxed } from '@/components/template/ContentBoxed';
import { Page } from '@/components/template/Page';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export function Cadastrar() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');
  const navigate = useNavigate();

  useEffect(() => {
    if (password && confirmPassword && password !== confirmPassword) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'As senhas não coincidem',
      });
    } else {
      clearErrors('confirmPassword');
    }
  }, [password, confirmPassword, setError, clearErrors]);

  const onSubmit = (data) => {
    const { name, cpf, email, password } = data;

    instance
      .post('/api/register', {
        name,
        cpf,
        email,
        password,
      })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        navigate('/perfil');
      })
      .catch((error) => {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Erro ao tentar se cadastrar. Tente novamente mais tarde.');
      });
  };

  return (
    <Page className="flex items-center justify-center">
      <ContentBoxed className="mb-20 space-y-10">
        <h1 className="mt-32 text-center text-3xl font-bold text-blue-500">
          Criar Conta
        </h1>
        <div className="flex w-full flex-col items-center justify-center gap-7">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-1">
              <Input.Root
                mode="light"
                width="xl:w-[45rem] lg:w-[45rem] md:w-[45rem] w-80"
                height="h-14"
              >
                <Input.Icon name="UserRound" />
                <Input.Content
                  placeholder="Nome Completo"
                  type="text"
                  register={{ ...register('name', { required: true }) }}
                />
              </Input.Root>
              {errors.name && (
                <p className="text-sm text-red-500">Campo nome é obrigatório</p>
              )}
            </div>
            <div className="space-y-1">
              <Input.Root
                width="xl:w-[45rem] lg:w-[45rem] md:w-[45rem] w-80"
                height="h-14"
              >
                <Input.Icon name="IdCard" />
                <Input.Content
                  placeholder="CPF"
                  type="text"
                  register={{ ...register('cpf', { required: true }) }}
                />
              </Input.Root>
              {errors.cpf && (
                <p className="text-sm text-red-500">Campo CPF é obrigatório</p>
              )}
            </div>
            <div className="space-y-1">
              <Input.Root
                width="xl:w-[45rem] lg:w-[45rem] md:w-[45rem] w-80"
                height="h-14"
              >
                <Input.Icon name="Mail" />
                <Input.Content
                  placeholder="Email"
                  type="text"
                  register={{ ...register('email', { required: true }) }}
                />
              </Input.Root>
              {errors.cpf && (
                <p className="text-sm text-red-500">
                  Campo email é obrigatório
                </p>
              )}
            </div>
            <div className="flex flex-col gap-4 md:flex-row lg:flex-row xl:flex-row">
              <div className="space-y-1">
                <Input.Root
                  width="xl:w-[22rem] lg:w-[22rem] md:w-[22rem] w-80"
                  height="h-14"
                >
                  <Input.Icon name="KeyRound" />
                  <Input.Content
                    placeholder="Senha"
                    type="password"
                    register={{ ...register('password', { required: true }) }}
                  />
                </Input.Root>
                {errors.password && (
                  <p className="text-sm text-red-500">
                    Campo senha é obrigatório
                  </p>
                )}
              </div>
              <div className="space-y-1">
                <Input.Root
                  width="xl:w-[22rem] lg:w-[22rem] md:w-[22rem] w-80"
                  height="h-14"
                >
                  <Input.Icon name="Check" />
                  <Input.Content
                    placeholder="Confirme a senha"
                    type="password"
                    register={{
                      ...register('confirmPassword', {
                        validate: (value) =>
                          value === password || 'As senhas não coincidem',
                      }),
                    }}
                  />
                </Input.Root>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-6">
              <Button
                className="bg-blue-500 text-white hover:bg-blue-600"
                size="xl"
              >
                <p className="ml-4 flex items-center gap-2.5 text-base">
                  Criar Conta
                </p>
                <Icon name="ArrowRight" className="size-4" />
              </Button>
              <span className="flex gap-2 text-sm">
                Ja possui conta?
                <a className="flex font-semibold text-blue-400" href="/login">
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
