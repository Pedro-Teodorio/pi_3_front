import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import instance from "@/api/axios"; // Importa a instância do axios para a API

export function ProductCard({ product, className }) {
  const { id, name, price, image } = product;

  const handleAddToCart = async () => {
    try {
      const response = await instance.post("/api/carrinho/adicionar", product);
      console.log("Produto adicionado ao carrinho:", response.data.item);
      alert("Produto adicionado ao carrinho!");
    } catch (error) {
      console.error("Erro ao adicionar produto ao carrinho:", error);
      alert("Erro ao adicionar o produto. Tente novamente.");
    }
  };

  const nameUrl = name.toLowerCase().replace(/[, ]+/g, "-");

  return (
    <Card
      className={`xl:w-[23%] lg:w-[49%] md:w-[45%] w-[100%] p-4 flex flex-col items-center justify-center shadow-md ${className}`}
    >
      <Link
        className="flex flex-col items-center justify-center"
        to={`/produto/${id}/${nameUrl}`}
        state={product}
      >
        <div className=" w-72 h-72 flex items-center">
          <CardHeader>
            <img
              className="mix-blend-multiply object-cover"
              src={image}
              alt={name}
            />
          </CardHeader>
        </div>
        <CardContent className="flex flex-col gap-4 p-0">
          <p className="font-extrabold text-zinc-700 text-sm">{name}</p>
          <CardTitle className="text-xl text-sky-500 font-bold text-[20px]">
            R$ {price.toFixed(2)}
          </CardTitle>
        </CardContent>
      </Link>
      <Button
        className="w-full mt-4 bg-sky-500 hover:bg-sky-600 flex items-center justify-between gap-4 text-white rounded-xl font-bold"
        onClick={handleAddToCart}
      >
        <p>Adicionar ao carrinho</p>
        <ChevronRight className="size-8" />
      </Button>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
};
