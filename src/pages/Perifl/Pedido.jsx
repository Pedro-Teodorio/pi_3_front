

import { ContentBoxed } from '@/components/template/ContentBoxed';
import { Page } from '@/components/template/Page';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useLocation,  } from 'react-router-dom';


 export function Pedido  () {
    let { state } = useLocation();
    let {pedido} = state;

    
    return (
        <Page >
             <ContentBoxed>
                <h1 className="mt-8 p-3  text-xl font-extrabold md:text-2xl lg:text-3xl xl:text-3xl">
                    Número do pedido{' '}
                    <span className="text-sky-500">FLPP:{pedido.PEDIDO_ID}</span>
                </h1>
                <h2 className='px-3 text-lg font-extrabold md:text-lg lg:text-lg xl:text-lg text-zinc-500'>
                    Data do pedido: {new Date(pedido.PEDIDO_DATA).toLocaleDateString("pt-BR")}
                </h2>
            </ContentBoxed>
             <ContentBoxed className="mt-5 mb-10 flex flex-col gap-4 rounded-xl bg-zinc-50 p-4">
                
                        {
                            pedido.itens.map((item) => {
                                return(
                                    <Card key={item.produto.PRODUTO_ID} className="flex flex-col gap-10 bg-zinc-50 p-4 md:flex-row lg:flex-row xl:flex-row">
                                        <div className="flex items-center justify-center h-48 w-48 md:h-48 md:w-48 lg:h-48 lg:w-48 xl:h-48 xl:w-48  mx-auto">
                                            <CardHeader className="h-full w-full">
                                            <img
                                                className="object-cover h-full w-full mix-blend-multiply"
                                                src={item.produto.imagens[0].IMAGEM_URL}
                                                alt={item.produto.PRODUTO_NOME}
                                            />
                                            </CardHeader>
                                        </div>
                                        <CardContent className="flex flex-1 flex-col justify-center gap-4">
                                            <div>
                                            <p className="text-lg font-bold text-zinc-700">{item.produto.PRODUTO_NOME}</p>
                                            <p className="text-xl font-bold text-sky-500">
                                                R$ {(item.ITEM_PRECO * item.ITEM_QTD).toFixed(2)}
                                            </p>
                                            </div>
                                        </CardContent>
                                        <div className="flex flex-row items-center justify-center gap-4 md:flex-col lg:flex-col xl:flex-col">
                                            <div className="flex flex-col items-center">
                                                <span className="text-xs text-zinc-400">Quant.</span>
                                                <div className="flex items-center justify-center">
                                                    <span className="mx-4">{item.ITEM_QTD}</span>
                                            
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                )
                        
                        })
                        }
              
                
             </ContentBoxed>
           
        </Page>
       
    );
};

