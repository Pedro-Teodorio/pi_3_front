import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/Icon';
import { ContentBoxed } from '@/components/template/ContentBoxed';

export function InfoSection() {
  return (
    <ContentBoxed className="mt-8 flex flex-wrap justify-between gap-2 rounded-lg">
      <Card className="flex w-[100%] items-center justify-center p-4 text-center shadow-lg md:w-[100%] lg:w-[30%] xl:w-[30%]">
        <CardContent className="flex flex-col items-center gap-4">
          <Icon name="Keyboard" className="size-10 text-blue-500" />
          <CardTitle className="text-lg font-bold">Devolução gratís</CardTitle>
          <p className="text-sm text-zinc-500">
            Se você não estiver satisfeito com sua compra, devolva-a
            gratuitamente dentro de 30 dias.
          </p>
        </CardContent>
      </Card>
      <Card className="flex w-[100%] items-center justify-center p-4 text-center shadow-lg md:w-[100%] lg:w-[30%] xl:w-[30%]">
        <CardContent className="flex flex-col items-center gap-4">
          <Icon name="CalendarDaysIcon" className="size-10 text-blue-500" />
          <CardTitle className="text-lg font-bold">
            Entrega no mesmo dia
          </CardTitle>
          <p className="text-sm text-zinc-500">
            Oferecemos um serviço de entrega que nunca foi feito antes. Faça o
            checkout hoje e receba seus produtos em poucas horas.
          </p>
        </CardContent>
      </Card>
      <Card className="flex w-[100%] items-center justify-center p-4 text-center shadow-lg md:w-[100%] lg:w-[30%] xl:w-[30%]">
        <CardContent className="flex flex-col items-center gap-4">
          <Icon name="Earth" className="size-10 text-blue-500" />
          <CardTitle className="text-lg font-bold">Para o planeta</CardTitle>
          <p className="text-sm text-zinc-500">
            Prometemos 1% das vendas para a preservação e restauração do
            ambiente natural.
          </p>
        </CardContent>
      </Card>
    </ContentBoxed>
  );
}
