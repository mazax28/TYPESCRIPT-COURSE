import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';

import { Product } from '../api/types';
type ProductProps = {
    item: Product;
    handleAddToCart: (clickedItem: Product) => void;

}
function ItemProduct({item, handleAddToCart}: ProductProps) {
  return (
    <Grid  size={{ xs: 12, sm: 6, md: 4 }} className='bg-[#fafafa] p-4 rounded-md shadow-md flex flex-col items-center justify-end  space-y-4'>
      <img  className='w-[200px] h-[200px] object-contain' src={item.image} alt={item.title} />
      <div className='text-center text-[#09090b] space-y-2'>
        <h3 className='text-xl font-semibold'>{item.title}</h3>
        <h3 className='font-bold'>${item.price}</h3>
      </div>
      <Button sx={{
    color: 'white',           // Texto negro
    backgroundColor: 'black',
    borderWidth:'2px',
    '&:hover': {
      border:'black',
      color: 'black',   // Mantiene el borde negro al pasar el mouse
      backgroundColor: 'white'
    }
  }} onClick={() => handleAddToCart(item)}>Add To Cart</Button>
    </Grid>
  )
}

export default ItemProduct
