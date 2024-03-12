import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,Outlet,RouterProvider,Outlet} from 'react-router-dom';
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const AppLayout=()=>{

    const[user,setuser]=useState("karthi")
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedinUser:user}}>
            <div>
        <Header/>
        <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
        
        
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        
        children:[
            {
                path:"/",
                element:<Body/>,
                
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/menu/:resid",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
        ]
    },
    
]);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
