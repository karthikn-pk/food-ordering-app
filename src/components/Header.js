import { useState } from "react"
import {Link} from "react-router-dom"
import {LOGO_URL} from "../utils/constants"
export const Header=()=>{

    const [loginbtn,setloginbtn]=useState("Login");
    return (
        
        <div className="header">
        <div className="logo-container"> 
        <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>Cart</li>
        <button className="login" onClick={()=>
            loginbtn==="Login"?setloginbtn("Logout"):setloginbtn("Login")
        }>{loginbtn}</button>
        

        </ul>
        </div>
        </div>
    )
}

export default Header;