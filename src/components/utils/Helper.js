export function filterData(searchText,restaurants){
    const filterData= restaurants.filter((restaurant)=>
    restaurant?.json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    return filterData;
    
}