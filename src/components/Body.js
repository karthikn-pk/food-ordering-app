import BikeCard from "./BikeCard";
import { useState, useEffect } from "react";

const Body=()=>{

    const [listofBikes,setlistofBikes]=useState([]);
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async ()=>{
        const data=await fetch("https://www.91wheels.com/_next/data/-mJ5c6SOKUjhuyIUX4_S6/index.json");
        const json=await data.json();
        
        setlistofBikes(json?.pageProps?.pageData?.popular_bike);

    };

    
    return (
        
        <div className="body">
            <div className="search"> 
                <h2>search</h2>
                {/* <button className="filterModel" onClick={()=>{
                    const filteredList=listofBikes.filter(
                        (res)=> res.yearOfManufacturing > 2020
                    );
                    setlistofBikes(filteredList);
                }}>latest Model</button> */}
                {/* <button className="filterYamaha" onClick={()=>{
                    const filYam=listofBikes.filter(
                        (ele)=> ele.brand_name==="Yamaha"
                    )
                    console.log(filYam);
                    setlistofBikes(filYam);
                }}>yamaha </button> */}
            </div>
            <div className="rest-container">
            {
                listofBikes.map((ele)=>(
                    <BikeCard key={ele.v_model_id} bikeData={ele}/>
                ))
            }
            </div>
            
        </div>
    )
}

export default Body;