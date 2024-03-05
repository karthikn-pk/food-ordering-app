import Usercls from "./Usercls";
import React from "react";
class About  extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        console.log("because i am your parent");
    }

    render(){
        return(
        <div>
        <h1>food ordering app</h1>
        <h2>Restaurants</h2>
        <Usercls name={"karthikeyan from cls"} location={"Vellore"}/>
    </div>
        )
    }
}


export default About;