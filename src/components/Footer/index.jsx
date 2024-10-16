import { FooterContainer, ImageLogo, LinkSocial } from './style';
import { FaFacebook } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <FooterContainer className="font-inter">
      <section>
        <ImageLogo
          src="./logo-escrito.svg"
          alt="Imagem escrito Alpha em azul."
        />
      </section>
      <section>
        <p className="text-body-md text-white">
          Feito por três mosqueteiros || Todos direitos reservados ©
        </p>
      </section>
      <section className="flex h-[103px] w-[195px] flex-col items-center justify-center gap-2">
        <h3 className="text-primary text-head-sm font-bold">
          Entre em contato
        </h3>
        <ul className='flex gap-4'>
          <li>
            <LinkSocial href="#">
              <FaFacebook />
            </LinkSocial>
          </li>
          <li>
            <LinkSocial href="#">
              <BsTwitter />
            </LinkSocial>
          </li>
          <li>
            <LinkSocial href="#">
              <FaInstagram />
            </LinkSocial>
          </li>
        </ul>
      </section>
    </FooterContainer>
  );
}
