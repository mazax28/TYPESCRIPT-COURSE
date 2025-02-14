import { Product } from "../api/types"
type CartItemProps = {
    item: Product;
    handleAddToCart: (clickedItem: Product) => void;
    removeFromCart:(id: number) => void;
    removerOneUnit:(id: number) => void;
}

function CartItem({item, handleAddToCart, removeFromCart, removerOneUnit}: CartItemProps) {
  return (
    <div className="bg-[#09090b] flex flex-col space-y-2 p-2 text-[white] rounded-lg">
        <div className="flex flex-row space-x-2">
            <img className="w-[50px] h-[50px]" src={item.image} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <h3 className="font-bold">{`$ ${item.price}`}</h3>
            </div>

        </div>
        <div className="flex flex-row items-center space-x-2">
            <button  className="cursor-pointer bg-[#fafafa] text-[#09090b] w-[32px] h-[32px] rounded-lg font-bold" onClick={() => handleAddToCart(item)}>+</button>
            <p>{item.amount}</p>
            <button className="cursor-pointer  bg-[#fafafa] text-[#09090b] w-[32px] h-[32px] rounded-lg font-bold" onClick={() => removerOneUnit(item.id)}>-</button>
            <button className="cursor-pointer  bg-[#fafafa] text-[#09090b] p-2 rounded-lg" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
    </div>
  )
}

export default CartItem
