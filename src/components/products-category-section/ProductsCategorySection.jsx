import { SectionProductsContainer } from './style';
import { Slider } from './Slider';
import { ArrowRight } from 'lucide-react';
export const ProductsCategorySection = ({name_section}) => {
  return (
    <SectionProductsContainer>
      <div className="flex items-center justify-between">
        <h2 className="pl-16 text-head-md font-bold text-primary">
          {name_section}
        </h2>
        <div>
          <button className="flex items-center gap-2 pr-16 text-head-sm font-bold text-primary">
            Ver mais
            <ArrowRight className="size-5 text-primary" />
          </button>
        </div>
      </div>
      <Slider />
    </SectionProductsContainer>
  );
};
