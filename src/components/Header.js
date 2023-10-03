import { useState } from "react";
import { Link } from "react-router-dom";
// const loggedInUser=()=>{
//   // Api call to check authentication
//   return false;
// }

// SPA - Single Page Application
// Clients side routing

export const Title=()=>(
    
  <a href='/'>
    <img className="logo" src='https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg?w=740&t=st=1692861306~exp=1692861906~hmac=4c7d2e8c47facffaa7c7f0fa53c241a74f738bb4d2c455c57cc79bca5ef07713' alt='logo'></img>
  </a>
)





const Header=()=>{
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  
  return(
    
      <div className='header'>
          <Title/>
          <div className='nav-items'>
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/about"><li>About</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
              <Link to="/cart"><li>Cart</li></Link>
              
            </ul>
          </div>
          {

            isLoggedIn? (
              <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
            ):(
              <button onClick={()=>setIsLoggedIn(true)}>Login</button>
            )
          }
          
          
      </div>
  )
}
export default Header;