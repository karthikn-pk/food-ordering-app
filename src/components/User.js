import React from "react";
class User extends React.Component{
    constructor(props){
        super(props);
        
    }
    render() {
        const{name,location}=this.props
        return (
            <div className="usercls">
                <h1>Name:{name}</h1>
             <h2>Place:{location}</h2>
            </div>
             
        );
    }
}
export default User;