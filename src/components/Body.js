import bikeList from "../utils/MockData";
const Body=()=>{
    return (
        
        <div className="body">
            <div className="search"> 
                <h2>search</h2>
            </div>
            <div className="rest-container">
            {
                bikeList.map((ele)=>(
                    <BikeCard key={ele.product_id} bikeData={ele}/>
                ))
            }
            </div>
            
        </div>
    )
}

export default Body;