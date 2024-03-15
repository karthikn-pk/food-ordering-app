import { screen, render, fireEvent } from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";


it("should have login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
    </Provider></BrowserRouter>
    
    )
    const button=screen.getByRole("button");
    expect(button).toBeInTheDocument(); 

});

it("should have cart items",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
    </Provider></BrowserRouter>
    
    )
    const cartItems=screen.getByText("Cart-(0)");
    expect(cartItems).toBeInTheDocument(); 

});
it("should change login button to logout button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
    </Provider></BrowserRouter>
    
    )
    const loginbtn=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginbtn);
    const logoutbtn=screen.getByRole("button",{name:"Logout"});
    expect(logoutbtn).toBeInTheDocument(); 

});