import { Product } from "../api/types";
import { useEffect, useState } from "react";
type CartSummaryProps = {
    cartProducts: Product[];
}
function CartSummary({cartProducts}: CartSummaryProps) {
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const getTotalPrice = () =>{
        return cartProducts.reduce((total, item) => total + item.price, 0);
    }
    useEffect(() => {

        setTotalPrice(getTotalPrice());
    }, [cartProducts])

  return (
    <div className="bg-[#09090b] p-2 rounded-lg text-[white] flex flex-col space-y-2">
        <h1 className="text-xl font-bold">Resumen del carrito</h1>
        <ul className="space-y-2">
            {cartProducts.map((product) => (
            <li className="text-xs flex flex-row justify-between items-center"  key={product.id}>
                <div className="font-bold">
                    {`${product.title} - $${product.price}`}
                </div>
                <div>
                    {product.amount}
                </div>
            </li>
            ))}
        </ul>
        <p className="text-xl font-bold mt-4">{`Total Price: $${totalPrice}`}</p>
      
    </div>
  )
}

export default CartSummary
