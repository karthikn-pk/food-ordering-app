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
 - when class component is called/loaded first constructor is called and then render method is called.
 # life cycle of react class component 
 1- constructor
 2- render method
 3- component did mount - used to make api call

 when it has multiple childs
 - parent constructor 
 - parent render 

    - first child constructor 
    - first child render 

    - second child constructor
    - second child render

    <DOM updated - in single batch>

    - first child component did mount
    - second child component did mount
    - parent component did mount

* Mounting
    constructor(initial) 
    render(initl)
        <html dummy>
    componentdid mount
        api call
        this.setState() --> state var is updated

* Update cycle
    render(API Data)
    <html updates API data>
    component did update()

*unmounting(removing from the UI)
    component will unmount()

* lazy loading
* dynamic loadin
* split coding
 const About = lazy()=>import("./components/About");
 element:(
    <suspence> <About/></suspence>
 )

* higher order functions
its a function which takes functions as arguments and enhance it and returns back a new function.///

controlled and uncontrolled
lifting the state

* React context provides accessibility to all component to read or provide context.
- syntax
import { createContext } from 'react';

const ThemeContext = createContext('light');

SomeContext.Provider lets you provide the context value to components.
````
function App() {
  const [theme, setTheme] = useState('light');
  // ...
  return (
    <ThemeContext.Provider value={theme}>
      <Page />
    </ThemeContext.Provider>
  );
}
````
````
function Button() {
  // ✅ Recommended way
  const theme = useContext(ThemeContext); //reads context
  return <button className={theme} />;
}
````

# Redux toolkit
- npm i @reduxjs/toolkit and react redux
- build our store
- connect our store to our app
- slice(cart slice)
- dispatch(action)
- selector
 - either we need to mutate existing state or return a new state in redux tookit
