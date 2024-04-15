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
    <div className="text-center font-roboto">
      <h1 className="font-bold text-2xl">Your Cart </h1>
      <button
        className=" bg-[#FF9800] p-2 m-2 rounded-md"
        onClick={handleClearCart}>
        Clear Cart
      </button>
      {cartItems.length === 0 && <h1>Cart is empty</h1>}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />

        <div className="bg-[#3ebb53] p-4 rounded-lg flex justify-evenly font-bold font mb-4">
          <h1 className="text-2xl  ">Total Amount </h1>
          <h1 className="text-2xl">
            ₹
            {cartItems.reduce((acc, item) => {
              price = item?.card?.info?.price / 100;
              acc = acc + price;
              return acc;
            }, 0)}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Cart;
