import { ContentBoxed } from "./ContentBoxed";
import LogoFooter from "/images/logo_footer.svg";
import { Icon } from "../Icon";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-0  w-full flex items-center p-4 ">
      <ContentBoxed>
        <div className="flex xl:flex-row lg:flex-row md:flex-col flex-col justify-between items-center gap-4 ">
          <div>
            <img src={LogoFooter} alt="Logo da loja" className="w-32" />
          </div>
          <div className="flex flex-col  md:flex-row gap-2">
            <p className="text-zinc-50 text-center">
              Feito por quarteto fantástico || Todos direitos reservados ©{" "}
            </p>
          </div>
          <div className="flex flex-col gap-2 xl:items-center xl:text-left lg:items-center lg:text-left text-center  items-center">
            <p className="text-zinc-50 font-bold text-[1.5rem]">
              Entre em contato
            </p>
            <p className="text-zinc-50">Acesse nossas redes sociais</p>
            <div className="flex gap-6 mt-1">
              <a href="#" rel="noreferrer">
                <Icon
                  name="FacebookIcon"
                  className="text-zinc-50 hover:text-blue-400 transition duration-300"
                />
              </a>
              <a href="#" rel="noreferrer">
                <Icon
                  name="InstagramIcon"
                  className="text-zinc-50 hover:text-blue-400 transition duration-300"
                />
              </a>
              <a href="#" rel="noreferrer">
                <Icon
                  name="TwitterIcon"
                  className="text-zinc-50 hover:text-blue-400 transition duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </ContentBoxed>
    </footer>
  );
}
