import Body from "../Body"
import MOCK_DATA from "../mocks/MockRestList.json"
import { render } from "@testing-library/react"


global.fetch=jest.fn(()=>{

    return Promise.resolve(
        {
            json:()=>{
                return Promise.resolve(MOCK_DATA)
            }
        }
    )
})

it("should render body component while clicking search button",()=>{
    render(<Body/>)
})