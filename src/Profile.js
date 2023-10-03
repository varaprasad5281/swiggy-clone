import { useState } from "react";
const Profile=(props)=>{
    const [count,setCount]=useState(0)

    return(
        <div>
            <h1>This is a Profile section</h1>
            <h1>count: {count}</h1>
            <button onClick={()=>setCount(1)}>Counter</button>
        </div>
    )
}
export default Profile;