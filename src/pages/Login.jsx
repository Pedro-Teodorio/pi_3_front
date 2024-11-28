/* eslint-disable no-unused-vars */
import instance from '@/api/axios';
import { Icon } from '@/components/Icon';
import { Input } from '@/components/Input';
import { ContentBoxed } from '@/components/template/ContentBoxed';
import { Page } from '@/components/template/Page';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    mode : 'onSubmit'
  });

  const navigate = useNavigate();

  const handleLogin = async (e,t) => {

  
    try {
      const { email, password } = e;
      const response = await instance.post('/api/login', { email, password });
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      
      set('root', 'serverError', {
        type: 'manual',
        message: 'Email ou senha inválidos',
      });
      return;
    }
  };

  

  return (
    <Page className="flex items-center justify-center">
      <ContentBoxed className="mb-20 space-y-10">
        <h1 className="mt-32 text-center text-3xl font-bold text-blue-500">
          Inicie sessão para finalizar a compra com rapidez.
        </h1>
        <div className="flex w-full flex-col items-center justify-center gap-7">
          <h2 className="text-2xl font-semibold text-blue-400">
            Inicie a sessão
          </h2>
          <form className="space-y-7" onSubmit={handleSubmit(handleLogin)}>
            <div className="space-y-2">
              <Input.Root
                mode="light"
                width="xl:w-[576px] lg:w-[576px] md:w-[576px] w-80"
                height="h-14"
              >
                <Input.Icon name="Mail" />
                <Input.Content
                  placeholder="Email"
                  type="email"
                  register={{ ...register('email', { required: true }) }}
                />
              </Input.Root>
              {errors.email && (
                <p className="text-sm text-red-500">
                  Campo email é obrigatório
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Input.Root
                width="xl:w-[576px] lg:w-[576px] md:w-[576px] w-80"
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

            <div className="flex w-full flex-col items-center justify-center gap-6">
              <Button
                className="bg-blue-500 text-white hover:bg-blue-600"
                size="xl"
                type="submit"
              >
                <p className="ml-4 flex items-center gap-2.5 text-base">
                  Entrar
                </p>
                <Icon name="ArrowRight" className="size-4" />
              </Button>
              <span className="flex gap-2 text-sm">
                Não tem conta ainda?
                <a
                  className="flex font-semibold text-blue-400"
                  href="/cadastrar"
                >
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
