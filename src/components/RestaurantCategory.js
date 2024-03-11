
import ItemList from "./ItemList";
const RestaurantCategory=({data,showItems,setshowIndex})=>{
  

  const handleClick=()=>{
    setshowIndex();
  }
    
    return (
        <div className="w-6/12 cursor-pointer bg-gray-300 mx-auto my-4 p-2  shadow-lg ">
          <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold">{data.title}   ({data.itemCards.length})</span>   
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
</svg>
          </div>
          
{showItems?<ItemList items={data.itemCards} /> : null}

  </div>
    )
}
export default RestaurantCategory;