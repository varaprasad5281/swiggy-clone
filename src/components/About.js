import { Outlet } from "react-router-dom";
import React from "react";
import Profile from "../Profile";
import ProfileClass from "../ProfileClass";

class About extends React.Component{
    constructor(props){
        super();
        console.log("constructor")
    }
    async componentDidMount(){
        
    }
    render(){
        return (
            <div>
                <h1>About Us Page</h1>
                <p>
                    
                    This is the namaste react live course 
                </p>
                <Outlet/>
                <Profile/>
                <ProfileClass/>
                
            </div>
        )

    }

}

export default About;