import { Icon } from './Icon';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';

export function ShopCartProduct({ product, add, remove, removeOne }) {
  return (
    <Card className="flex flex-col gap-10 bg-zinc-50 p-4 md:flex-row lg:flex-row xl:flex-row">
      <div className="flex items-center justify-center h-48 w-48 md:h-48 md:w-48 lg:h-48 lg:w-48 xl:h-48 xl:w-48">
        <CardHeader className="h-full w-full">
          <img
            className="object-cover h-full w-full mix-blend-multiply"
            src={product.image}
            alt={product.name}
          />
        </CardHeader>
      </div>
      <CardContent className="flex flex-1 flex-col justify-center gap-4">
        <div>
          <p className="text-lg font-bold text-zinc-700">{product.name}</p>
          <p className="text-xl font-bold text-sky-500">
            R$ {(product.price * product.quantity).toFixed(2)}
          </p>
        </div>
      </CardContent>
      <div className="flex flex-row items-center justify-center gap-4 md:flex-col lg:flex-col xl:flex-col">
        <div className="flex flex-col items-center">
          <span className="text-xs text-zinc-400">Quant.</span>
          <div className="flex items-center justify-center">
            <Button
              className="size-10 bg-transparent shadow-none hover:bg-transparent"
              onClick={() => remove?.(product)}
            >
              <Icon name="ChevronLeft" className="size-10 text-sky-500" />
            </Button>
            <span className="mx-4">{product.quantity}</span>
            <Button
              className="h-10 w-10 bg-transparent shadow-none hover:bg-transparent"
              onClick={() => add?.(product)}
            >
              <Icon name="ChevronRight" className="size-6 text-sky-500" />
            </Button>
          </div>
        </div>

        <Button
          className="mt-4 flex items-center rounded bg-sky-500 text-white hover:bg-sky-600 md:mt-0 lg:mt-0 xl:mt-0"
          onClick={() => removeOne?.(product)}
        >
          <div className="flex gap-2">
            <Icon name="Trash2" className="size-8 text-white" />
            <span>Remover</span>
          </div>
        </Button>
      </div>
    </Card>
  );
}
