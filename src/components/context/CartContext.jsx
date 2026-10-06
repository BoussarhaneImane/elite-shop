import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Création du contexte du panier
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCartItems = localStorage.getItem('cartItems') || localStorage.getItem('cart_guest');
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const normalizedProduct = {
      ...product,
      name: product.name || product.title,
      image: product.image || product.img,
      title: product.title || product.name,
      img: product.img || product.image,
    };

    setCartItems((previousItems) => {
      const existingItem = previousItems.find((item) => item.id === normalizedProduct.id);
      return existingItem
        ? previousItems.map((item) =>
            item.id === normalizedProduct.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...previousItems, { ...normalizedProduct, quantity: 1 }];
    });
  };

  // Fonction pour modifier la quantité d'un produit
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Fonction pour retirer un produit
  const handleRemoveItem = (id) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        handleQuantityChange,
        handleRemoveItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
