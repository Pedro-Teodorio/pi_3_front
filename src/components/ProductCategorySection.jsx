import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/Icon";
import { Link } from "react-router-dom";
import products_data from "@/data/constants/products.json";
import { ProductCard } from "@/components/ProductCard";
import PropTypes from "prop-types";

export function ProductCategorySection({ category_id, category_name }) {
	return (
		<section className="flex flex-col gap-y-4">
			<div className="flex justify-between items-center py-4">
				<h2 className="text-xl font-bold flex items-center gap-4">
					<Icon name="ShoppingBag" className="text-blue-500 font-bold" />
					{category_name}
				</h2>
				<Link to={`/${category_name.toLowerCase()}`} className="text-blue-500 text-xl font-semibold flex items-center gap-2">
					Ver mais
					<ArrowRight className="size-6 font-semibold" />
				</Link>
			</div>
			<div className="flex flex-wrap lg:justify-between md:justify-center justify-center gap-4">
				{products_data
					.filter((product) => product.category_id === category_id)
					.slice(0, 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</section>
	);
}

ProductCategorySection.propTypes = {
    category_id: PropTypes.number.isRequired,
    category_name: PropTypes.string.isRequired,
};