import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


const RestaurantMenu=()=>{

    const {resid}=useParams();
    
    const [menuInfo,setmenuInfo]=useState({});
    useEffect(()=>{
        fetchMenu(); 
    },[])

    const fetchMenu= async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId="+resid);
        const json=await data.json();
        console.log(json);
        setmenuInfo(json);
        
    };
    console.log(menuInfo);
    
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