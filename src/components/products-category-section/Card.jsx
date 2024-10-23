import { ChevronRight } from 'lucide-react';

export const Card = () => {
  return (
    <div className="flex w-72  flex-col gap-4 rounded-xl  bg-black p-4 font-inter">
      <img src="https://hotsite.pichau.com.br/nvidia/rtx4090/images/rtx-4090.png" alt="" className='object-cover w-60 mx-auto'/>

      <p className="text-head-sm font-bold text-white">R$ 3999,99</p>
      <div>
        <p className="text-head-md font-medium text-primary">RTX 4090</p>
        <p className="text-body-md font-normal text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
        </p>
      </div>
      <button className="flex items-center justify-between rounded-2xl border border-primary bg-transparent p-2 text-primary">
        <span className="pl-2 text-body-sm">Adicionar ao carrinho</span>
        <ChevronRight className="size-5 text-primary" />
      </button>
    </div>
  );
};
