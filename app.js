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

const RestCard=()=>{

    return (
    <div className="card-container">
        <img alt="photo" className="card-img" src="https://www.motorbeam.com/wp-content/uploads/2021-Bajaj-Pulsar-220F-Matte-Black.jpg" />
        <h3>Pulsar 220f</h3>
        <h4>2018</h4>
        <h4>Good</h4>
    </div>
    )
}

const Body=()=>{
    return (
        
        <div className="body">
            <div className="search"> 
                <h2>search</h2>
            </div>
            <div className="rest-container">
            <RestCard/>
            <RestCard/>
            <RestCard/>
            <RestCard/>
            <RestCard/>
            <RestCard/>
            <RestCard/>
            <RestCard/>
            <RestCard/>
            <RestCard/>
            <RestCard/>
            <RestCard/>
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
