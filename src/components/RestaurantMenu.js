
import { useParams } from "react-router-dom";
import Shimer from "./Shimer";
import useRestaurant from "./utils/useRestaurant";
import { CDN_IMG_URL } from "../constants";
// import { CDN_IMG_URL } from "../constants";



const RestaurantMenu=()=>{
    // How to read dynamic URL - Params (to read the id dynamically)
    const {resId}=useParams(); 

    const restaurant=useRestaurant(resId);

    // const {name,cuisines,costForTwoMessage}=restaurant?.cards[0].card?.card?.info;
    
    
    return !restaurant?(
        <Shimer/>
    ):(
        <div className="menu">
            <h3>Restaurant id: {restaurant?.cards[0].card.card.info.id}</h3>
            <img src={CDN_IMG_URL+restaurant.cards[0].card.card.info.cloudinaryImageId} alt="Restaurant-image"></img>
            <h3>{restaurant.cards[0].card.card.info.name}</h3>
            <h3>{restaurant.cards[0].card.card.info.areaName}</h3>
            <h3>{restaurant.cards[0].card.card.info.city}</h3>
            <h3>{restaurant.cards[0].card.card.info.costForTwoMessage}</h3>
            <h3>{restaurant.cards[0].card.card.info.avgRating}</h3>

            <div>
    
                <h1>Menu</h1>
            </div>
        </div>
    

    )

}
export default RestaurantMenu;