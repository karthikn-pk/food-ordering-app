const BikeCard=(props)=>{
    const {bikeData}=props
    const {v_make_display_name,v_model_display_name,v_mileage,v_model_min_price,v_model_image}=bikeData
    return (
    <div className="card-container">
        <img alt="photo" className="card-img" src={v_model_image} />
        <h3>{v_make_display_name}</h3>
        <h3>{v_model_display_name}</h3>
        <h4>Millege : {v_mileage}</h4>
        <h4>Rs.{v_model_min_price}</h4>
    </div>
    )
}

export default BikeCard;