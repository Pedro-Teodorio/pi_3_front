import { getOrders } from '@/api/endpoints';

import { Icon } from '@/components/Icon';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const navigate = useNavigate();
  const fetchPedidos = async () => {
    const data = await getOrders();
    setPedidos(data);
  };
  useEffect(() => {
    fetchPedidos();
  }, []);
  console.log(pedidos);
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl bg-zinc-50 p-4 md:w-full lg:flex lg:w-[65%] lg:flex-col xl:flex xl:w-[65%] xl:flex-col">
      <h2 className="text-xl font-bold">Pedidos</h2>
      {pedidos ? (
        pedidos?.map((pedido) => {
          const { itens } = pedido;
          const formattedDate = new Date(pedido.PEDIDO_DATA).toLocaleDateString(
            'pt-BR'
          );
          return (
            <Card
              onClick={() => {
                navigate(`/perfil/pedidos/FLPP${pedido.PEDIDO_ID}`, {
                  state: { pedido },
                });
              }}
              key={pedido.PEDIDO_ID}
              className="flex flex-col gap-2 bg-zinc-50 p-4 md:flex-row lg:flex-row xl:flex-row"
            >
              <CardHeader className="flex flex-1 flex-col items-center gap-4 md:flex-row lg:flex-row xl:flex-row">
                <div>
                  <Icon name="Package" className="size-8 text-sky-500" />
                </div>
                <div>
                  <p className="font-bold">
                    Numero do pedido: {`FLPP${pedido.PEDIDO_ID}`}
                  </p>
                  <p className="text-xs font-bold text-sky-500 md:text-lg lg:text-lg xl:text-lg">{`Data de confirmação  : ${formattedDate}`}</p>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-center gap-4 p-4">
                <div className="flex flex-col items-center justify-center gap-2 md:flex-col md:items-start md:justify-start lg:flex-col lg:items-start lg:justify-start xl:flex-col xl:items-start xl:justify-start">
                  <p className="font-bold text-zinc-700">
                    Status:{' '}
                    <span className="text-sky-500">
                      {pedido.status.STATUS_DESC}
                    </span>
                  </p>
                  <p className="font-bold text-zinc-700">
                    Total:
                    <span className="text-sky-500">
                      {' '}
                      R${' '}
                      {itens
                        .reduce(
                          (acc, item) => acc + item.ITEM_PRECO * item.ITEM_QTD,
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })
      ) : (
        <div className='flex items-center gap-2 justify-center h-full'>
          <Icon name="PackageOpen" className="size-16 text-sky-500" />
          <p className="text-center text-sky-500 text-3xl">Não há pedidos</p>
        </div>
      )}
    </div>
  );
}
