const RestCard=(props)=>{
    const {restData}=props;
    return (
    <div className="card-container">
        <img alt="photo" className="card-img" src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restData.info.cloudinaryImageId
            } />
        <h3>{restData.info.name}</h3>
        <h3>Rating : {restData.info.avgRating}</h3>
        <h4>{restData.info.cuisines.join(", ")}</h4>
        <h4>Delivery Time : {restData.info.sla.deliveryTime} Mins</h4>
        
    </div>
    )
}

export default RestCard;
