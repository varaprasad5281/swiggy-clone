import { useState,useEffect } from "react";

const useRestaurant=(resId)=>{
    

    const [restaurant,setRestaurant]=useState(null)

    // GET data from API
    useEffect(()=>{
        getRestaurantInfo()
    
    },[])
    async function getRestaurantInfo(){
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId="+resId)
        const json=await data.json()
        setRestaurant(json.data)
    }
    



    // return restaurant data
    return restaurant;

}
export default useRestaurant;