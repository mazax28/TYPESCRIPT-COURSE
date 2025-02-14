import { useState } from 'react';
import { Product } from '../api/types';

export const useCart = () => {
 const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartOPen, setCartOpen] = useState<boolean>(false);


  const handleSetCartOpen = (open: boolean) => {
    setCartOpen(open);
}
   // Manejador para agregar productos al carrito
  // El return es necesario para que setCartItems reciba el nuevo estado del carrito.
  const handleAddToCart = (clickedItem: Product) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: (item.amount ?? 1) + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRemoveOneUnit = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item
      ).filter((item) => item.amount > 0)
    );
  };

  const getTotalItems = (items: Product[]) => {
    return items.reduce((total, item) => total + (item.amount ?? 1), 0);
  }

    return {cartItems, cartOPen,handleAddToCart, handleRemoveFromCart, handleRemoveOneUnit, getTotalItems, handleSetCartOpen};

}