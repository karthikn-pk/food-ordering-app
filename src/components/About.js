import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-3xl text-center">QuickBite</h1>
      <p>Welcome to QuickeBite</p>
      <p>
        At QuickBite, our mission is simple: to make ordering food convenient,
        enjoyable, and delightful for everyone. We strive to connect food lovers
        with their favorite local restaurants, offering a seamless experience
        from selection to delivery.
      </p>
      <footer className="absolute bottom-0 bg-blue-500 w-full h-12">
        <h6 className="text-center font-bold justify-center">created by pk</h6>
      </footer>
    </div>
  );
};

export default About;

// import Usercls from "./Usercls";
// import React from "react";
// class About  extends React.Component{
//     constructor(props){
//         super(props);

//     }

//     componentDidMount(){
//         console.log("because i am your parent");
//     }

//     render(){
//         return(
//         <div>
//         <h1>food ordering app</h1>
//         <h2>Restaurants</h2>
//         <Usercls name={"karthikeyan from cls"} location={"Vellore"}/>
//         <Usercls name={"karthikeyan from cls"} location={"Vellore"}/>

//     </div>
//         )
//     }
// }

// export default About;
