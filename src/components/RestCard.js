const RestCard=(props)=>{
    const {restData}=props;
    return (
    <div className="w-[200px] bg-gray-200 p-4 m-4">
        <img alt="photo" className="card-img" src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restData.info.cloudinaryImageId
            } />
        <h3>{restData.info.name}</h3>
        <div className="flex">
        <h3>Rating : {restData.info.avgRating}</h3><img className="w-4 h-5 mx-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png"/>

        </div>
        <h4>{restData.info.cuisines.join(", ")}</h4>
        <h4>Delivery Time : {restData.info.sla.deliveryTime} Mins</h4>
        
    </div>
    )
}

export default RestCard;
