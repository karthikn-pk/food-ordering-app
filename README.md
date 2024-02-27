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
 # why react is so fast?
 - react has react fiber 
 - its a reconciliation algorithm comparing old virtual dom and new virtual dom and only updates the modified dom in ui. this is why react is fast
- whenever the state variable gets updated, react triggers reconcialition cycles ( rerenders entire component)
 # react hooks
 - normal javascript utility functions
 - # useState() 
 - superpowerful react state variable
 - useState has two parameters 1) current state variable 2)function used to update the current state variable
 - const [listofCards,setlistofCards]=useState([]);
 - whenevr state variable change react rerender entire component
 - # useEffect()

 # two types of routing
 - client side routing
 - server side routing
 Outlet
 - class based component
 - super(props) used to extract parent class