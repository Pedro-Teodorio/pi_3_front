import { Page } from "@/components/template/Page";

import { HeroBanner } from "@/components/HeroBanner";
import { InfoSection } from "@/components/InfoSection";
import { ContentBoxed } from "@/components/template/ContentBoxed";


import { ProductCategorySection } from "@/components/ProductCategorySection";

export default function Home() {
	
	
	return (
		<Page>
			<HeroBanner />
			<InfoSection />
			<ContentBoxed className="bg-zinc-50 mt-14  p-5 flex flex-col gap-20 mb-14 rounded-xl">
				<ProductCategorySection category_id={1} category_name="Processadores" />
				<ProductCategorySection category_id={2} category_name="Placas de Video" />
			</ContentBoxed>
		</Page>
	);
}
