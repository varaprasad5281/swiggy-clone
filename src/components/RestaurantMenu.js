
import { useParams } from "react-router-dom";
import Shimer from "./Shimer";
import useRestaurant from "./utils/useRestaurant";
import { CDN_IMG_URL } from "../constants";



const RestaurantMenu=()=>{
    // How to read dynamic URL - Params (to read the id dynamically)
    const {resId}=useParams();   
    const restaurant=useRestaurant(resId);

    

    return !restaurant?(
        <Shimer/>
    ):(
        <div>
            <div className="menu">
            
            <h1>Restaurant id: {restaurant.data.cards[0].card.card.info.id}</h1>
            <h2>{restaurant.data.cards[0].card.card.info.name}</h2>
            <img src={CDN_IMG_URL+restaurant?.data.cards.card.card.cloudinaryImageId} alt="restaurant-img"/>
            <h3>{restaurant?.name}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating}</h3>
            <h3>{restaurant?.costForTwo}</h3>
        </div>
        <div>
            <h1>Menu</h1>
            <ul>
                {Object.values(restaurant?.menu?.items).map((item)=>{
                    return (
                    <li key={item.id}>{item.name}</li>
                )})}
            </ul>
        </div>



        </div>

        

        // </div>
        

    )

}
export default RestaurantMenu;