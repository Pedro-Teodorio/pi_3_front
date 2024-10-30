import { useState } from 'react';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Input, ButtonContainer } from './style';
import api from '../../api/axiosConfig';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Validação de e-mail usando regex simples
  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validações de email e senha
    if (!email || !password) {
      setError('Preencha todos os campos');
      setLoading(false);
      return;
    }

    if (!isEmailValid(email)) {
      setError('Insira um e-mail válido');
      setLoading(false);
      return;
    }

    try {
      const response = await api.post('/api/login', { email, password });
      const token = response.data.token;

      // Armazena o token e configura o cabeçalho de autorização
      localStorage.setItem('token', token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      window.location.href = '/perfil';
    } catch (error) {
      setError(
        error.response?.status === 401
          ? 'Credenciais inválidas'
          : 'Erro ao tentar se conectar. Tente novamente mais tarde.'
      );
      console.error('Erro de autenticação:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="font-inter">
      <Header />
      <section className="flex h-[720px] w-full flex-col items-center justify-center gap-5 bg-neutral-950">
        <h2 className="text-head-lg text-white">Inicie sua sessão</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[60px] w-[440px] rounded-md bg-black px-8 text-neutral-500"
            placeholder="E-mail"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-[60px] w-[440px] rounded-md bg-black px-8 text-neutral-500"
            placeholder="Senha"
          />
          <ButtonContainer className="flex flex-col items-center justify-center gap-5">
            <Button type="submit" disabled={loading}>
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>
            {error && <p className="text-red-600">{error}</p>}
          </ButtonContainer>
          <article className="flex w-full justify-center">
            <p className="text-white">
              Não tem conta ainda?{' '}
              <span className="text-primary">
                <a href="/cadastro">Crie sua conta agora</a>
              </span>
            </p>
          </article>
        </form>
      </section>
      <Footer />
    </section>
  );
}
