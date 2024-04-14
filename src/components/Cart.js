import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
    <h1>Cart is Empty</h1>;
  };
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl">Your Cart </h1>
      <button
        className=" bg-[#FF9800] p-2 m-2 rounded-md"
        onClick={handleClearCart}>
        Clear Cart
      </button>
      {cartItems.length === 0 && <h1>Cart is empty</h1>}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
