import { act } from "react-dom/test-utils"
import { fireEvent, render,screen} from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/MockRestMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom";
 

global.fetch=jest.fn(()=>{
    return Promise.resolve({  
        json:()=> Promise.resolve(MOCK_DATA)

    });
});
 

it("should load restaurant menu component", async ()=>{
    await act(async () => render(
    <Provider store={appStore}>
        <RestaurantMenu/>
    </Provider>));

    const accordionHeader=screen.getByText("Bucket Biryani- Big Saver (6)");
    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(6);

});