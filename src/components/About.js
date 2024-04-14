import React from "react";

const About = () => {
  return (
    <div>
      <div className="font-roboto bg-green-300 w-[1250px] mx-auto p-4">
        <h1 className="text-3xl text-center p-6">Quick Bite</h1>
        <h1 className="text-2xl text-red-600 text-center font-bold p-4">
          Welcome to Quick Bite
        </h1>
        <p className=" text-xl text-justify my-4">
          At QuickBite, our mission is simple: to make ordering food convenient,
          enjoyable, and delightful for everyone. We strive to connect food
          lovers with their favorite local restaurants, offering a seamless
          experience from selection to delivery.
        </p>
        <p className=" text-xl text-justify my-4">
          Quick Bite delivers authentic foods to your doorsteps, operating
          seemlessly across all locations. Enjoy your favourite meal at your
          HOME!!!
        </p>
      </div>
      <footer className="absolute bottom-0 bg-[#2C7865] w-full h-12">
        <h6 className="text-center font-bold justify-center">Created by PK</h6>
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
