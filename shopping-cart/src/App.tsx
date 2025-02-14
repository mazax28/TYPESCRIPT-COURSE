import { LinearProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Products, Product } from './api/types';
import { getProducts } from './api/apiProducts';
import ProductList from './components/ProductList';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



function App() {
  // Estado del carrito
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartOPen, setCartOpen] = useState<boolean>(false);

  // Consulta de productos
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: getProducts
  });

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

  const getTotalItems = (items: Product[]) => {
    return items.reduce((total, item) => total + (item.amount ?? 1), 0);
  }


  // Renderizado
  return (
    <div className='bg-[#09090b] min-h-screen w-full px-8 py-8 md:px-16 lg:px-32'>
      <Drawer anchor='right' open={cartOPen} onClose={() =>setCartOpen(false)} >
        hola
      </Drawer>
      <button className='bg-amber-500' onClick={()=>setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon style={{color:'white'}}/>
        </Badge>
      </button>
      {isLoading ? (
        <LinearProgress />
      ) : (
        data && <ProductList products={data} handleAddToCart={handleAddToCart} />
      )}
    </div>
  );
}

export default App;
