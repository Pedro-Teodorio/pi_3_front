import { useState } from 'react';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Input, ButtonContainer } from './style';
import api from '../../api/axiosConfig';
import { Mail, KeyRound } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      localStorage.setItem('token', token); // Certifique-se de usar a chave correta

      if (response.status === 200) {
        window.location.href = '/perfil';
      } else {
        setError('Erro ao fazer login, não foi possível validar credenciais.');
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setError('Credenciais inválidas');
        } else {
          setError(
            'Erro ao se conectar ao servidor. Tente novamente mais tarde.'
          );
        }
      } else if (error.request) {
        setError('Servidor indisponível. Verifique sua conexão.');
      } else {
        setError('Ocorreu um erro inesperado. Tente novamente.');
      }
      console.error('Erro de autenticação:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="font-inter">
      <Header />
      <section className="flex h-[720px] w-full flex-col items-center justify-center gap-5 bg-dark-gray">
        <h2 className="text-head-lg text-white">Inicie sua sessão</h2>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center gap-5"
        >
          <div className="relative w-[440px]">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 transform text-neutral-400">
              <Mail />
            </span>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[60px] w-full rounded-md bg-neutral-950 px-12 text-neutral-400 placeholder:text-neutral-400"
              placeholder="E-mail"
            />
          </div>

          <div className="relative w-[440px]">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 transform text-neutral-400">
              <KeyRound />
            </span>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-[60px] w-full rounded-md bg-neutral-950 px-12 text-neutral-400 placeholder:text-neutral-400"
              placeholder="Senha"
            />
          </div>

          <ButtonContainer className="flex flex-col items-center justify-center gap-5">
            <Button type="submit" disabled={loading}>
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>
            {error && <p className="text-red-600">{error}</p>}
          </ButtonContainer>

          <article className="flex w-full justify-center text-sm">
            <p className="text-white">
              Não tem conta ainda?{' '}
              <span className="text-primary">
                <Link to={'/cadastro'}>Crie sua conta agora</Link>
              </span>
            </p>
          </article>
        </form>
      </section>
      <Footer />
    </section>
  );
}
