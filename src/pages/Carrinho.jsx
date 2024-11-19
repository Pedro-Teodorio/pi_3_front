import { useState, useEffect } from "react";
import instance from "@/api/axios";
import { EmptyShopCart } from "@/components/EmptyShopCart";
import { ShopCartProduct } from "@/components/ShopCartProduct";
import { ContentBoxed } from "@/components/template/ContentBoxed";
import { Page } from "@/components/template/Page";
import { TotalShopCart } from "@/components/TotalShopCart";
import { Button } from "@/components/ui/button";

export function Carrinho() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await instance.get("/api/carrinho");
      setItems(response.data?.items || []);
    } catch (err) {
      console.error("Erro ao buscar o carrinho:", err);
      setError("Não foi possível carregar o carrinho.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItems = async (item) => {
    try {
      const response = await instance.post("/api/carrinho/adicionar", item);
      setItems((prevItems) => [...prevItems, response.data.item]);
    } catch (err) {
      console.error("Erro ao adicionar item:", err);
    }
  };

  const removeItem = async (item) => {
    try {
      const response = await instance.post("/api/carrinho/remover", {
        id: item.id,
      });
      setItems((prevItems) =>
        prevItems.filter((i) => i.id !== response.data.id)
      );
    } catch (err) {
      console.error("Erro ao remover item:", err);
    }
  };

  return (
    <Page className="flex flex-col justify-center items-center">
      {loading ? (
        <ContentBoxed className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500"></div>
          <p className="ml-4">Carregando...</p>
        </ContentBoxed>
      ) : error ? (
        <ContentBoxed className="p-4 text-center">
          <p className="text-red-500">{error}</p>
        </ContentBoxed>
      ) : items.length === 0 ? (
        <ContentBoxed className="p-4 text-center">
          <EmptyShopCart />
        </ContentBoxed>
      ) : (
        <>
          <TotalShopCart items={items} />
          <ContentBoxed className="bg-zinc-50 mt-10 p-4 flex flex-col gap-4 rounded-xl">
            {items.map((item) => (
              <ShopCartProduct
                key={item.id}
                product={item}
                add={addItems}
                remove={removeItem}
              />
            ))}
          </ContentBoxed>
          <ContentBoxed className="my-8 flex">
            <Button
              className="bg-sky-500 hover:bg-sky-600 text-white font-bold p-4 mx-auto"
              size="xl"
            >
              Finalizar Compra
            </Button>
          </ContentBoxed>
        </>
      )}
    </Page>
  );
}
