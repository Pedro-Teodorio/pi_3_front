import { ArrowRight } from 'lucide-react';
import { Icon } from '@/components/Icon';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import { getProducts } from '@/api/endpoints';
import { useEffect, useState } from 'react';

export function ProductCategorySection({ category_id, category_name }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between px-20 py-4">
        <h2 className="flex items-center gap-4 text-xl font-bold">
          <Icon name="ShoppingBag" className="font-bold text-blue-500" />
          {category_name}
        </h2>
        <Link
          to={`/allProducts?category_id=${category_id}`}
          className="flex items-center gap-2 text-xl font-semibold text-blue-500"
        >
          Ver mais
          <ArrowRight className="size-6 font-semibold" />
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:justify-center lg:justify-around">
        {products
          .filter(
            (product) =>
              product.category_id === category_id && product.stock > 0
          )
          .slice(0, 4)
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              categoryName={category_name}
            />
          ))}
      </div>
    </section>
  );
}
