import { Page } from '@/components/template/Page';

import { HeroBanner } from '@/components/HeroBanner';
import { InfoSection } from '@/components/InfoSection';
import { ContentBoxed } from '@/components/template/ContentBoxed';

import { ProductCategorySection } from '@/components/ProductCategorySection';
import { useEffect, useState } from 'react';
import { getCategories } from '@/api/endpoints';

export default function Home() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategorias(data);
    });
  }, []);

  return (
    <Page>
      <HeroBanner />
      <InfoSection />
      <ContentBoxed className="mb-14 mt-14 flex flex-col gap-20 rounded-xl bg-zinc-50 p-5">
        {categorias.map((categoria) => (
          <ProductCategorySection
            key={categoria.id}
            category_id={categoria.id}
            category_name={categoria.nome}
            categoryName={categoria.nome}
          />
        ))}
      </ContentBoxed>
    </Page>
  );
}
