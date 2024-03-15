import Body from "../Body"
import MOCK_DATA from "../mocks/MockRestList.json"
import { act } from "react-dom/test-utils"
import { fireEvent, render,screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";



global.fetch=jest.fn(()=>{

    return Promise.resolve(
        {
            json:()=>{
                return Promise.resolve(MOCK_DATA)
            }
        }
    )
})

it("should render body component while clicking search button",async ()=>{
    await act(async()=>render(
        <BrowserRouter>
        <Body/></BrowserRouter>
    
    ));
    const searchbtn=screen.getByRole("button",{name:"search"})
    expect(searchbtn).toBeInTheDocument();
    
});

it("should display restaurant cards according to input text",async ()=>{
    await act(async()=>render(
        <BrowserRouter>
        <Body/></BrowserRouter>
    
    ));
    const searchbtn=screen.getByRole("button",{name:"search"});
    const searchInput=screen.getByTestId("searchInput")
    fireEvent.change(searchInput,{target:{value:"pizza"}})
    fireEvent.click(searchbtn);

    const cards=screen.getAllByTestId("resCard")



    expect(cards.length).toBe(1);
    
});

it("should display top rated restaurant", async()=>{
    await act(async()=>render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
        
    ));
    const topRatedResBtn=screen.getByRole("button",{name:"Top rated Restaurants"})
    fireEvent.click(topRatedResBtn);
    const cards=screen.getAllByTestId("resCard")
    expect(cards.length).toBe(11);


}
)