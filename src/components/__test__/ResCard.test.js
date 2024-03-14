import { render,screen } from "@testing-library/react"
import RestCard from "../RestCard"
import MOCK_DATA from "../mocks/ResCardMock.json"
import "@testing-library/jest-dom";



it("should render all restaurant cards",()=>{
    render(<RestCard resData={MOCK_DATA}/>)
    const ResName=screen.getByText("LunchBox - Meals and Thalis");
    expect(ResName).toBeInTheDocument();
})