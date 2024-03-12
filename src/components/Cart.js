import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
        <h1>cart is empty</h1>
    }
    return(
        <div className="text-center">
            <h1 className="font-bold text-2xl">cart  </h1> 
            <button className="text-white bg-red-500 p-2 m-2 rounded-md" onClick={handleClearCart}>clear Cart</button>
            {cartItems.length===0 && <h1>Cart is empty</h1>}
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>

            </div>
        </div>

    )
}
export default Cart;