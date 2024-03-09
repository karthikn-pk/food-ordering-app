import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu=()=>{

    const {resid}=useParams();
    
    const menuInfo=useRestaurantMenu(resid);
   
    
    // const { name, cuisines, costForTwoMessage } = menuInfo?.data?.cards[2]?.card?.card?.info || {};
    console.log(menuInfo);
    const Recommendcategories=menuInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cat)=>
    cat.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
    const categories=menuInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cat)=>
        cat.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

    console.log(Recommendcategories);

    const {name, cuisines, costForTwoMessage,avgRating} = menuInfo?.data?.cards[0]?.card?.card?.info || {};
    return (
        
        <div className="menu">
            <h1>{name}</h1> <h2>{avgRating}</h2>
            <h1>{cuisines}</h1>
            <h2>{costForTwoMessage}</h2>
            
        </div>
    )
};


export default RestaurantMenu;