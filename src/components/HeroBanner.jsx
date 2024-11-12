import ImageBanner from "/images/image_banner.png";
export function HeroBanner() {
	return (
		<div className="hero-banner  bg-gradient-to-b from-zinc-900 via-neutral-500 to-zinc-100 text-white ">
			<div className="max-w-screen-2xl mx-auto flex flex-wrap  items-center justify-center">
				<div className="flex-1 p-4 lg:mt-10 md:mt-10 mt-10 xl:text-left lg:text-center md:text-center text-center">
					<h1 className="text-4xl font-bold mb-4 ">LEVEL UP!</h1>
					<p className="text-lg font-thin mb-8">Descubra o melhor hardware de jogos para elevar sua experiência de jogo ao próximo nível.</p>
					<button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-500 transition duration-300">Compre Agora</button>
				</div>
				<img src={ImageBanner} alt="banner" className="object-cover" />
			</div>
		</div>
	);
}
