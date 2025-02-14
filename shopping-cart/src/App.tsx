import { LinearProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Product } from './api/types';
import { getProducts } from './api/apiProducts';
import ProductList from './components/ProductList';
import Drawer from '@mui/material/Drawer';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartList from './components/CartList';
import { useCart } from './hooks/useCart';



function App() {
  const {cartItems, cartOPen,handleAddToCart, handleRemoveFromCart, handleRemoveOneUnit, getTotalItems, handleSetCartOpen} = useCart();
  // Consulta de productos
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: getProducts
  });

  

  // Renderizado
  return (
    <>
      {isLoading && <LinearProgress />}
      <div className='bg-[#09090b] min-h-screen w-full px-8 py-8 md:px-16 lg:px-32'>
        <Drawer anchor='right' open={cartOPen} onClose={() =>handleSetCartOpen(false)} >
          <CartList cartItems={cartItems} hadleAddToCart={handleAddToCart}  removeFromCart={handleRemoveFromCart} removerOneUnit={handleRemoveOneUnit}/>
        </Drawer>
        <button className='bg-[#fafafa]  w-[32px] h-[32px] rounded-lg absolute top-2 right-4 cursor-pointer' onClick={()=>handleSetCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color='error'>
            <AddShoppingCartIcon style={{color:'#09090b'}}/>
          </Badge>
        </button>
        {!isLoading && data && (
          <ProductList products={data} handleAddToCart={handleAddToCart} />
        )}
      
      </div>
    </>
  );
}

export default App;
