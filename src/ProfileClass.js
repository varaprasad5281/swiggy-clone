import React from "react";
class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:"Dummy Name",
            location:"Dummy Location"
        }

    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/varaprasad5281")
        const json=await data.json()
        console.log(json);
        this.setState({
            userInfo:json
        })
    }
    componentDidUpdate(){
        console.log("Component Did update")
    }
    componentWillUnmount(){
        console.log("Component will unmount")
    }
    render(){
        return (
            <div>
                <h1>This is a class component</h1>
                <img src={this.state.userInfo.avatar_url}></img>
                <h1>Name : {this.state.userInfo.name}</h1>
                <h1>Location : {this.state.userInfo.location}</h1>
               

            </div>
            
        )
    }

}
export default ProfileClass;