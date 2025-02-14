import { Product } from '../api/types';
import ItemProduct from './ItemProduct';
import Grid from '@mui/material/Grid2';


type ProductListProps = {
    products: Product[];
    handleAddToCart: (clickedItem: Product) => void;
};

function ProductList({ products, handleAddToCart }: ProductListProps) {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
          <ItemProduct handleAddToCart={handleAddToCart} item={product} />
        
      ))}
    </Grid>
  );
}

export default ProductList;
