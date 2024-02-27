import RestCard from "./RestCard";
import Shimmer from "./shimmer";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";

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
    return listofCards.length===0 ? <Shimmer/> :
     ( 
        <div className="body">
            <div className="filter">
                <div>
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>setsearchText(e.target.value)}/> <button onClick={()=>{
                        const filteredSearch=listofCards.filter(
                            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setfilteredCards(filteredSearch);


                    }}>search</button>
                </div>
                <button className="filterModel" onClick={()=>{
                    const filteredList=listofCards.filter(
                        (res)=> res.info.avgRating > 4.2
                    );
                    setfilteredCards(filteredList);
                }}>Top rated Restaurants</button>
                
            </div>
            <div className="rest-container">
            {
                filteredCards.map((ele)=>(
                    <Link key={ele.info.id} to={"/menu/"+ele.info.id}><RestCard  restData={ele}/></Link>
                ))
            }
            </div>
            
        </div>
    )
}

export default Body;