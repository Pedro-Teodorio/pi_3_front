import { SectionProductsContainer } from './style';
import { Slider } from './Slider';
import { ArrowRight } from 'lucide-react';
// eslint-disable-next-line react/prop-types
export const ProductsCategorySection = ({ name_section }) => {
  return (
    <SectionProductsContainer className="m-auto my-10 flex flex-col">
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
