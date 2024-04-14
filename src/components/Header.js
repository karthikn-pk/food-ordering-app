import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/foodapplogo.jpg";
import { FaShoppingCart } from "react-icons/fa";

import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
export const Header = () => {
  const { loggedinUser } = useContext(UserContext);

  const [loginbtn, setloginbtn] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-[#E53935] text-white font-roboto h-30 shadow-lg">
      <div className="logo-container">
        <img className="w-40 rounded-full " src={logo} />
      </div>
      <div className="flex items-center">
        <ul className="flex  font-bold  font-roboto text-2xl m-4 p-4 ">
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-3  relative">
            <Link to={"/cart"}>
              <FaShoppingCart />
              <span className="text-black bg-green-500 rounded-full ml-4 px-1 absolute top-[-20px] right-[-9px] ">
                {cartItems.length}
              </span>
            </Link>
          </li>
          <li className="px-3">{loggedinUser}</li>
          <button
            className="login"
            onClick={() =>
              loginbtn === "Login"
                ? setloginbtn("Logout")
                : setloginbtn("Login")
            }>
            {loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
