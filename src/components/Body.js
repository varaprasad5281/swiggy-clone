
// import {restaurantList} from '../constants'
// import { restaurantList } from '../constants';
import RestaurantCard from './RestaurantCard'
import {useState,useEffect} from 'react'
// import { filterData } from './utils/Helper';
import Shimer from './Shimer';
import { Link } from 'react-router-dom';
import { FETCH_RESTAURANT_URL } from '../constants';



const Body=()=>{
    const [allRestaurants,setAllRestaurants]=useState([])
    const[filteredRestaurants,setFilteredRestaurants]=useState([]); 
    const [searchText,setSearchText]=useState("");  
    // console.log(restaurants)
    useEffect(()=>{
      // API CALL
      getRestaurants()
    },[])

    async function getRestaurants(){
      const data=await fetch(FETCH_RESTAURANT_URL);
      const json=await data.json()
      // optional Chaining(if my data was not there then it will break in this case we use optional chaining)
      setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    
    }



// Not render component(Early return)
    if(!allRestaurants) return null;

    return allRestaurants?.length===0 ? (
    <Shimer/>
    ):(
        <>
        <div className='search-container'>
            <input type="text" 
            className="search-input"
            placeholder='Search Restaurant'
            value={searchText} 
            onChange={(e)=>{
              // e.target.value => whatever you write in input it will target to that input value
            setSearchText(e.target.value)

            }}/>
            
            <button className='search-btn' 
            onClick={()=>{
              // need to filter the data from restaurantList
              
              const filteredRestaurants=allRestaurants.filter((res)=>
              res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              // update the state-restaurants
              setFilteredRestaurants(filteredRestaurants)
              
            }}>Search</button>
        </div>
        <div className='restaurant-list'>
          {filteredRestaurants.map((restaurant)=>{
            return (
            <Link to ={"/restaurant/"+restaurant.info.id}><RestaurantCard {...restaurant.info}/></Link>
            )
          })}
        </div>
     </>
      
    )
  }
  export default Body;