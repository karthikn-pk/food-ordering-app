import React from "react";
import ReactDOM from "react-dom/client";

/**
 * header
 * -logo
 * -nav items
 * body
 * -search
 * -cards
 * footer
 * -address
 * -links
 * 
 * 
 *  */ 

const Header=()=>{
    return (
        <div className="header">
        <div className="logo-container"> 
        <img className="logo" src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/fe/c7/07/fec70728-b49f-b95f-12fd-377ed9b02d8d/AppIcon-0-1x_U007emarketing-0-7-0-85-220-0.png/1200x630wa.png"/>
        </div>
        <div className="nav-items">
        <ul>
        <li>Home</li>
        <li>Contact Us</li>
        <li>Cart</li>

        </ul>
        </div>
        </div>
    )
}

const RestCard=(props)=>{
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
const bikeList=[
  {
    "brand_name": "Yamaha",
    "vehicle_name": "Yamaha MT 15",
    "product_id": 16889,
    "image": "https://d3rp4jjdkn5qto.cloudfront.net/16889_DMS-IN-BI1-21734_BIKE_RIGHT.JPEG__16022024_041255_.JPEG",
    "sale_price": 126000,
    "yearOfManufacturing": 2020,
    "vehicleTypeId": 3,
    "no_cost_emi_active": false
  },
  {
    "brand_name": "Yamaha",
    "vehicle_name": "Yamaha YZF R15",
    "product_id": 9920,
    "image": "https://d3rp4jjdkn5qto.cloudfront.net/9920_DMS-IN-BI1-12997_BIKE_RIGHT.JPEG__25072023_100527_.JPEG",
    "sale_price": 182500,
    "discount_price": 170000,
    "offer_price": 12500,
    "yearOfManufacturing": 2022,
    "vehicleTypeId": 3,
    "no_cost_emi_active": false
  },
  {
    "brand_name": "Honda",
    "vehicle_name": "Honda Grazia Disc",
    "product_id": 15254,
    "image": "https://d3rp4jjdkn5qto.cloudfront.net/15254_DMS-IN-BI1-21502_RIGHT_SIDE_VIEW.JPEG__12022024_065817_.JPEG",
    "sale_price": 71500,
    "yearOfManufacturing": 2020,
    "vehicleTypeId": 1,
    "no_cost_emi_active": false
  },
  {
    "brand_name": "TVS",
    "vehicle_name": "TVS Radeon",
    "product_id": 16571,
    "image": "https://d3rp4jjdkn5qto.cloudfront.net/16571_TN11AS2620_BIKE_RIGHT.JPG__13022024_125307_.JPG",
    "sale_price": 55000,
    "yearOfManufacturing": 2020,
    "vehicleTypeId": 2,
    "no_cost_emi_active": false
  },
  {
    "brand_name": "Yamaha",
    "vehicle_name": "Yamaha FZ X",
    "product_id": 16772,
    "image": "https://d3rp4jjdkn5qto.cloudfront.net/16772_DMS-IN-BI1-21628_BIKE_RIGHT.JPEG__14022024_101820_.JPEG",
    "sale_price": 106500,
    "yearOfManufacturing": 2021,
    "vehicleTypeId": 2,
    "no_cost_emi_active": false
  },
  {
    "brand_name": "Honda",
    "vehicle_name": "Honda Grazia",
    "product_id": 16445,
    "image": "https://d3rp4jjdkn5qto.cloudfront.net/16445_TN10BM1231_RIGHT_SIDE_VIEW.JPG__10022024_074252_.JPG",
    "sale_price": 70000,
    "yearOfManufacturing": 2021,
    "vehicleTypeId": 1,
    "no_cost_emi_active": false
  },
  {
    "brand_name": "Hero",
    "vehicle_name": "Hero Super Splendor",
    "product_id": 15793,
    "image": "https://d3rp4jjdkn5qto.cloudfront.net/15793_TN13R3411_BIKE_RIGHT.JPG__17022024_121517_.JPG",
    "sale_price": 61000,
    "yearOfManufacturing": 2018,
    "vehicleTypeId": 2,
    "no_cost_emi_active": false
  },
  {
    "brand_name": "Yamaha",
    "vehicle_name": "Yamaha YZF R15 V4",
    "product_id": 11603,
    "image": "https://d3rp4jjdkn5qto.cloudfront.net/11603_DMS-IN-BI1-15043_BIKE_RIGHT.JPEG__03092023_110244_.JPEG",
    "sale_price": 174500,
    "yearOfManufacturing": 2021,
    "vehicleTypeId": 3,
    "no_cost_emi_active": false
  }
]

const Body=()=>{
    return (
        
        <div className="body">
            <div className="search"> 
                <h2>search</h2>
            </div>
            <div className="rest-container">
            <RestCard bikeData={bikeList[0]} />
            <RestCard bikeData={bikeList[1]} />
            <RestCard bikeData={bikeList[2]} />
            <RestCard bikeData={bikeList[3]} />
            <RestCard bikeData={bikeList[4]} />
            <RestCard bikeData={bikeList[5]} />
            <RestCard bikeData={bikeList[6]} />
            <RestCard bikeData={bikeList[7]} />
            
            
            
            </div>
            
        </div>
    )
}

const AppLayout=()=>{
    return (
        <div>
        <Header/>
        <Body/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)
