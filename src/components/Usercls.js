import React from "react";
class Usercls extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
            count2:2,
        }
        
    }

    componentDidMount(){
        console.log("why do you make me mount first ?");
    }
    render() {
        const{name,location}=this.props;
        let{count}=this.state;
        return (
            <div className="usercls">
                <h1>Name:{name}</h1>
             <h2>Place:{location}</h2>
             <h2>number:{count}</h2> <button onClick={()=>{
                this.setState({
                    count:this.state.count+2, 
                })
             }}>+</button>
            </div>
             
        );
    }
}
export default Usercls;