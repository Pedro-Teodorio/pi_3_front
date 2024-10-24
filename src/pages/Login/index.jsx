import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Input, ButtonContainer } from './style';

export default function Login() {
  return (
    <section className="font-inter">
      <Header />
      <section className="flex h-[720px] w-full flex-col items-center justify-center gap-5 bg-neutral-950">
        <h2 className="text-head-lg text-white">Inicie sua sessão</h2>
        <form action="#" className="flex flex-col gap-5">
          <Input
            type="email"
            className="h-[60px] w-[440px] rounded-md bg-black px-8 text-neutral-500"
            placeholder="E-mail"
          />
          <Input
            type="password"
            className="h-[60px] w-[440px] rounded-md bg-black px-8"
            placeholder="Senha"
          />
          <ButtonContainer></ButtonContainer>
        </form>
      </section>
      <Footer />
    </section>
  );
}
