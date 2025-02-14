import {Product} from '../api/types';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
type CartListProps = {
    cartItems: Product[];
    hadleAddToCart: (clickedItem: Product) => void;
    removeFromCart:(id: number) => void;
    removerOneUnit:(id: number) => void;
}

function CartList({cartItems, hadleAddToCart, removeFromCart, removerOneUnit }: CartListProps) {
  return (
    <div className='flex flex-col gap-2 p-2'>

        {
            cartItems.length === 0
            ?
             (<p>No hay productos en el carrito</p>)
            : 
            (
                cartItems.map((item) => (
                    <CartItem key={item.id} item={item} handleAddToCart={hadleAddToCart} removeFromCart={removeFromCart} removerOneUnit={removerOneUnit}/>
                ))
            )

        }
        {

            cartItems.length > 0 &&( <CartSummary cartProducts={cartItems}/>)

        }
      
    </div>
  )
}

export default CartList
