import { Link } from 'react-router-dom';
import ImageBanner from '/images/image_banner.png';
export function HeroBanner() {
  return (
    <div className="hero-banner bg-gradient-to-b from-zinc-900 via-neutral-500 to-zinc-100 text-white">
      <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-center">
        <div className="mt-10 flex-1 p-4 text-center md:mt-10 md:text-center lg:mt-10 lg:text-center xl:text-left">
          <h1 className="mb-4 text-4xl font-bold">LEVEL UP!</h1>
          <p className="mb-8 text-lg font-thin">
            Descubra o melhor hardware de jogos para elevar sua experiência de
            jogo ao próximo nível.
          </p>
          <button className="rounded-xl bg-blue-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-500">
            <Link to={'/allProducts'}>Compre Agora</Link>
          </button>
        </div>
        <img src={ImageBanner} alt="banner" className="object-cover" />
      </div>
    </div>
  );
}
