import { ContentBoxed } from './ContentBoxed';
import LogoFooter from '/images/logo_footer.svg';
import { Icon } from '../Icon';

export function Footer() {
  return (
    <footer className="flex w-full items-center border-0 bg-zinc-800 py-8">
      <ContentBoxed>
        <div className="flex flex-col items-center justify-around gap-4 md:flex-col lg:flex-row xl:flex-row">
          <div>
            <img src={LogoFooter} alt="Logo da loja" className="w-32" />
          </div>
          <div className="flex flex-col gap-2 md:flex-row">
            <p className="text-center text-zinc-50">
              Feito por três mosqueteiros || Todos direitos reservados ©{' '}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center lg:items-center lg:text-left xl:items-center xl:text-left">
            <p className="text-[1.5rem] font-bold text-zinc-50">
              Entre em contato
            </p>
            <p className="text-zinc-50">Mande sua mensagem através</p>
            <div className="flex gap-4">
              <a href="#" rel="noreferrer">
                <Icon
                  name="FacebookIcon"
                  className="text-zinc-50 transition duration-300 hover:text-blue-400"
                />
              </a>
              <a href="#" rel="noreferrer">
                <Icon
                  name="InstagramIcon"
                  className="text-zinc-50 transition duration-300 hover:text-blue-400"
                />
              </a>
              <a href="#" rel="noreferrer">
                <Icon
                  name="TwitterIcon"
                  className="text-zinc-50 transition duration-300 hover:text-blue-400"
                />
              </a>
            </div>
          </div>
        </div>
      </ContentBoxed>
    </footer>
  );
}
