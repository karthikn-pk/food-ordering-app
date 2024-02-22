import RestCard from "./RestCard";
import Shimmer from "./shimmer";
import { useState, useEffect } from "react";

const Body=()=>{

    const [listofCards,setlistofCards]=useState([]);
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        
        setlistofCards(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    };
    return listofCards.length===0 ? <Shimmer/> :
     ( 
        <div className="body">
            <div className="search"> 
                <h2>search</h2>
                {/* <button className="filterModel" onClick={()=>{
                    const filteredList=listofBikes.filter(
                        (res)=> res.v_mileage > 30
                    );
                    setlistofBikes(filteredList);
                }}>good Millege</button>
                <button className="filterYamaha" onClick={()=>{
                    const filYam=listofBikes.filter(
                        (ele)=> ele.v_make_display_name==="Yamaha"
                    )
                    console.log(filYam);
                    setlistofBikes(filYam);
                }}>yamaha </button> */}
            </div>
            <div className="rest-container">
            {
                listofCards.map((ele)=>(
                    <RestCard key={ele.info.id} restData={ele}/>
                ))
            }
            </div>
            
        </div>
    )
}

export default Body;