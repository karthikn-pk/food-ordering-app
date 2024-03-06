import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu=()=>{

    const {resid}=useParams();
    
    const menuInfo=useRestaurantMenu(resid);
   
    
    const { name, cuisines, costForTwoMessage } = menuInfo?.data?.cards[2]?.card?.card?.info || {};

    // const {itemCards} = menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
        
        <div className="menu">
            <h1>{name}</h1>
            <h1>{cuisines}</h1>
            <h2>{costForTwoMessage}</h2>
            <h2>Menu</h2>
            {/* <ul>  
                {itemCards.map((item)=>(
                    <li >{item.card.info.name}  </li>
                ))
            } 
            </ul> */}
        </div>
    )
};
export default RestaurantMenu;