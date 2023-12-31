import { CDN_IMG_URL } from "../constants";

const RestaurantCard=({name,city,areaName,cloudinaryImageId,avgRating,sla:{deliveryTime}})=>{
    return (
      <div className='card'>
        <img alt="restaurant-pic" src={CDN_IMG_URL+cloudinaryImageId}></img>
        {/* <img src={props.restaurantList[0].data.name}></img> */}
        <h3>{name}</h3>
        <h4>{avgRating} Stars</h4>
        <h4>{city}</h4>
        <p>{areaName}</p>
        <p>{deliveryTime} { deliveryTime?.toString()?.length <= 3 && "mins"}</p>
      </div>
    )
}
export default RestaurantCard