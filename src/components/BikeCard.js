const BikeCard=(props)=>{
    const {bikeData}=props
    const {brand_name,vehicle_name,yearOfManufacturing,sale_price,image}=bikeData
    return (
    <div className="card-container">
        <img alt="photo" className="card-img" src={image} />
        <h3>{brand_name}</h3>
        <h3>{vehicle_name}</h3>
        <h4>Model Year : {yearOfManufacturing}</h4>
        <h4>Rs.{sale_price}</h4>
    </div>
    )
}

export default BikeCard;