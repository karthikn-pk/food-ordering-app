import { render,screen } from "@testing-library/react"
import RestCard from "../RestCard"
import MOCK_DATA from "../mocks/ResCardMock.json"
import "@testing-library/jest-dom";



it("should render all restaurant cards",()=>{
    render(<RestCard restData={MOCK_DATA}/>)
    const ResName=screen.getByText("Kwality Walls Frozen Dessert and Ice Cream Shop");
    expect(ResName).toBeInTheDocument();
})