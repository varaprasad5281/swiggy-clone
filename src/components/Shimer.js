const Shimer=()=>{
    return(

        <div className="restaurant-list">

            {Array(18)
            .fill("")
            .map((e,index) =>{
                return <div key={index} className="shimer-card"></div>

            })}

        </div>
        
    
        
    )
}
export default Shimer;