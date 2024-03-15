import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList=({items})=>{
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
        dispatch(addItems(item))

    }

    
    return(
        <div data-testid="foodItems">
            {items.map((item)=>(
                <div key={item.card.info.id} className="p-4 m-4  border-black border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                    <div className="py-2 font-bold">
                        <span>{item.card.info.name}</span>
                        <span>  - ₹ {item.card.info.defaultPrice? item.card.info.defaultPrice/100 : item.card.info.price/100}</span>
                    </div>
                    <p className="text-xs">
                    {item.card.info.description}
                    </p>
                    </div>
                    <div className="w-3/12 rounded-md shadow-md">
                        <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+item.card.info.imageId}/>
                        <div className="absolute shadow-md rounded-md">
                        <button className=" bg-white" onClick={()=>handleAddItem(item)}>Add +</button>
                        </div>
                        
                </div>
                </div>
               
                
            ))}
        </div>

    )
}
export default ItemList;