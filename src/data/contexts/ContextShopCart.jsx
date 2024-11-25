import { addShopCart, removeShopCart } from '@/api/endpoints';
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const ContextShopCart = createContext();

export function ProviderShopCart({ children }) {
  const [items, setItems] = useState([]);

  const addItems = (product) => {
    let updatedItems;
    const index = items.findIndex((item) => item.id === product.id);
    if (index === -1) {
      updatedItems = [...items, { ...product, quantity: 1 }];
      setItems(updatedItems);
    } else {
      items[index].quantity++;
      updatedItems = [...items];
      setItems(updatedItems);
    }
    const quantity = updatedItems.find(
      (item) => item.id === product.id
    ).quantity;
    addShopCart(product.id, quantity);
  };

  const removeItems = (product) => {
    const newItems = items
      .map((item) => {
        if (item.id === product.id) {
          item.quantity--;
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    setItems(newItems);
    const quantity =
      newItems.find((item) => item.id === product.id)?.quantity || 0;
    addShopCart(product.id, quantity);
  };

  const removeOneItem = (product) => {
    const newItems = items.filter((item) => item.id !== product.id);
    setItems(newItems);
    removeShopCart(product.id);
  };

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
      className="border border-red-400"
    >
      {children}
    </ContextShopCart.Provider>
  );
}

ProviderShopCart.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextShopCart;
