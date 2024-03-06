import { useEffect, useState } from "react";

const useRestaurantMenu=(resid)=>{
    
    const [menuInfo,setmenuInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId="+resid);
        const json=await data.json();
        setmenuInfo(json);
    }
    return menuInfo;
}
export default useRestaurantMenu;