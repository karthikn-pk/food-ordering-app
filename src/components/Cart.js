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
      <div className="flex justify-center my-4 p-3">
        <h1 className="font-bold text-2xl"> Cart Items </h1>
        <button
          className=" bg-[#FF9800] p-2 m-2 rounded-md"
          onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>

      {cartItems.length === 0 && (
        <h1 className="text-red-600 font-bold text-2xl sm:text-xs">
          Cart is empty
        </h1>
      )}
      <div className="w-6/12 sm:w-10/12 m-auto">
        <ItemList items={cartItems} />

        <div className="bg-[#3ebb53] sm:w-10/12 p-4 rounded-lg flex justify-evenly font-bold font mb-4">
          <h1 className="text-2xl sm:text-xs ">Total Amount </h1>
          <h1 className="text-2xl sm:text-xs">
            ₹
            {cartItems.reduce((acc, item) => {
              let price = item?.card?.info?.price / 100;
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
