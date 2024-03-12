import { useContext, useState } from "react"
import {Link} from "react-router-dom"
import {LOGO_URL} from "../utils/constants"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"
export const Header=()=>{

    const {loggedinUser}=useContext(UserContext);

    const [loginbtn,setloginbtn]=useState("Login");
    const cartItems=useSelector((store)=>store.cart.items)
    return (
        
        <div className="flex justify-between bg-orange-200 h-30 shadow-md">
        <div className="logo-container"> 
        <img className="w-40" src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
        <ul className="flex m-4 p-4 ">
        <li className="px-3"><Link to="/">Home</Link></li>
        <li className="px-3"><Link to="/about">About Us</Link></li>
        <li className="px-3"><Link to="/contact">Contact</Link></li>
        <li className="px-3 font-bold">
            <Link to={"/cart"}>Cart -( {cartItems.length})</Link></li>
        <li className="px-3">{loggedinUser}</li>
        <button className="login" onClick={()=>
            loginbtn==="Login"?setloginbtn("Logout"):setloginbtn("Login")
        }>{loginbtn}</button>
        

        </ul>
        </div>
        </div>
    )
}

export default Header;