import PropTypes from "prop-types";
import { createContext, useState } from "react";

const ContextShopCart = createContext();

export function ProviderShopCart({ children }) {
	const [items, setItems] = useState([]);

	const addItems = (product) => {
		const index = items.findIndex((item) => item.id === product.id);
		if (index === -1) {
			setItems([...items, { ...product, quantity: 1 }]);
		} else {
			items[index].quantity++;
			setItems([...items]);
		}
	};

	const removeItems = (product) => {
		const newItems = items.map((item) => {
			if (item.id === product.id) {
				item.quantity--;
			}
			return item;
		}).filter((item) => item.quantity > 0);
        setItems(newItems);
	};

    const removeOneItem = (product) => {
        const newItems = items.filter((item) => item.id !== product.id);
        setItems(newItems);
    }

   

	return (
		<ContextShopCart.Provider
			value={{
				items,
				addItems,
                removeItems,
                removeOneItem,
				get quantityItems() {
					return items.reduce((acc, item) => acc + item.quantity, 0);
				},
			}}
			className="border border-red-400 ">
			{children}
		</ContextShopCart.Provider>
	);
}

ProviderShopCart.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContextShopCart;
