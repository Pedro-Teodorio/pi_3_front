import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../api/axiosConfig';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

export const Cadastro = () => {
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

    api
      .post('/api/register', {
        name,
        cpf,
        email,
        password,
      })
      .then((response) => {
        console.log('Usuário cadastrado:', response.data);
        // Redireciona para a página de login
        window.location.href = '/login';
      })
      .catch((error) => {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Erro ao tentar se cadastrar. Tente novamente mais tarde.');
      });
  };
  return (
    <div className="font-inter">
      <Header />
      <div className="flex h-[706px] space-y-4 bg-dark-gray p-6">
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <h1 className="text-head-lg text-neutral-50">Crie sua conta</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid w-full max-w-4xl grid-cols-2 gap-4"
          >
            <div className="col-span-2 space-y-1">
              <Input.Root width="col-span-2" height="h-14" mode="dark">
                <Input.Icon name="UserRound" />
                <Input.Content
                  placeholder="Nome Completo"
                  type="text"
                  register={{ ...register('name', { required: true }) }}
                />
              </Input.Root>
              {errors.name && (
                <p className="text-red-500">Campo nome é obrigatório</p>
              )}
            </div>
            <div className="col-span-2 space-y-1">
              <Input.Root width="col-span-2" height="h-14" mode="dark">
                <Input.Icon name="IdCard" />
                <Input.Content
                  placeholder="CPF"
                  type="text"
                  register={{ ...register('cpf', { required: true }) }}
                />
              </Input.Root>
              {errors.cpf && (
                <p className="text-red-500">Campo CPF é obrigatório</p>
              )}
            </div>

            <div className="col-span-2 space-y-1">
              <Input.Root width="col-span-2" height="h-14" mode="dark">
                <Input.Icon name="Mail" />
                <Input.Content
                  placeholder="Email"
                  type="email"
                  register={{ ...register('email', { required: true }) }}
                />
              </Input.Root>
              {errors.email && (
                <p className="text-red-500">Campo email é obrigatório</p>
              )}
            </div>

            <div className="col-span-2 space-y-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
              <Input.Root
                width="xl:col-span-1 lg:col-span-1 md:col-span-1 col-span-2"
                height="h-14"
                mode="dark"
              >
                <Input.Icon name="KeyRound" />
                <Input.Content
                  placeholder="Crie sua senha"
                  type="password"
                  register={{ ...register('password', { required: true }) }}
                />
              </Input.Root>

              {errors.password && (
                <p className="text-red-500">Campo senha é obrigatório</p>
              )}
            </div>

            <div className="col-span-2 space-y-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
              <Input.Root
                width=" xl:col-span-1 lg:col-span-1 md:col-span-1 col-span-2 "
                height="h-14"
                mode="dark"
              >
                <Input.Icon name="Check" />
                <Input.Content
                  placeholder="Confirme sua senha"
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
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>

            <div className="col-span-2 mt-5 flex flex-col items-center gap-5">
              <Button type="submit">
                Cria Conta <ArrowRight className="ml-3 inline size-4" />
              </Button>

              <p className="flex justify-center gap-2 text-center text-sm text-white">
                Já possui conta?{' '}
                <Link to={'/login'} className="flex items-center text-primary">
                  Acesse sua conta agora
                  <ArrowUpRight className="inline size-3" />
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
