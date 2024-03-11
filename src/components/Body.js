import RestCard from "./RestCard";
import Shimmer from "./shimmer";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{

    const [listofCards,setlistofCards]=useState([]);
    const [filteredCards,setfilteredCards]=useState([]);

    const [searchText,setsearchText]=useState("");
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        setlistofCards(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredCards(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    };

    const onlineStatus=useOnlineStatus();
    if (onlineStatus===false) 
        return(
            <h1>you are offline</h1>

        );
        
    

    return listofCards.length===0 ? <Shimmer/> :
     ( 
        <div className="body">
            <div className="flex items-center">
                <div >
                    <input type="text" className="border border-solid border-black p-4 m-4 " value={searchText} onChange={(e)=>setsearchText(e.target.value)}/> 
                    <button className="p-2 m-2 h-12 bg-green-500 rounded-lg" onClick={()=>{
                        const filteredSearch=listofCards.filter(
                            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setfilteredCards(filteredSearch);


                    }}>search</button>
                </div>

                <button className="h-12 px-2 m-2 bg-green-500 rounded-lg" onClick={()=>{
                    const filteredList=listofCards.filter(
                        (res)=> res.info.avgRating > 4.2
                    );
                    setfilteredCards(filteredList);
                }}>Top rated Restaurants</button>
                
            </div>
            <div className="flex flex-wrap p-4 m-4">
            {
                filteredCards.map((ele)=>(
                    <Link key={ele.info.id} to={"/menu/"+ele.info.id}>
                    
                        <RestCard  restData={ele}/></Link>
                ))
            }
            </div>
            
        </div>
    )
}

export default Body;