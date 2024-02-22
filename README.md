# welcome react!!
# parcel 
- dev build / setup
- local server(localhost)
- HMR -hot module replacement parcel uses file watching algo..
- caching
- image optimization
- comprssing
- bundling
- consistent hashing
- code split
- minification
- error handling
- tree shaking -remove unused thing in code

/**
 * header
 * -logo
 * -nav items
 * body
 * -search
 * -cards
 * footer
 * -address
 * -links
 * 
 * 
 *  */ 

 # types of export and import components

 export default component;
 import component from "path"


 export const component;
 import {component} from "path";

 # react hooks
 - normal javascript utility functions
 - # useState() 
 - superpowerful react state variable
 - useState has two parameters 1) current state variable 2)function used to update the current state variable
 - const [listofCards,setlistofCards]=useState([]);
 - whenevr state variable change react rerender entire component
 - # useEffect()