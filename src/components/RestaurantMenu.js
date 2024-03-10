import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu=()=>{

    const {resid}=useParams();
    
    const menuInfo=useRestaurantMenu(resid);
   
    
   
    const Recommendcategories=menuInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cat)=>
    cat?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
    
    console.log(Recommendcategories);

    
    const {name, cuisines, costForTwoMessage} = menuInfo?.data?.cards[0]?.card?.card?.info || {};
    return (
        
        <div className="text-center">
            <h1 className="font-bold my-6">{name}</h1> 
            <h1>{cuisines} - {costForTwoMessage}</h1>
            {
                Recommendcategories ? Recommendcategories.map((item)=>(
                    <RestaurantCategory  data={item?.card?.card}/>
                )) : null
            }
        </div>
    )
};


export default RestaurantMenu;