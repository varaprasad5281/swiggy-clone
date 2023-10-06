import { useEffect } from "react";
import { useState } from "react";
const useOnline=()=>{
    
    
    const [isOnline,setIsOnline]=useState(true)

    useEffect(()=>{

        const handleOnline=()=>{
            setIsOnline(true)
        }

        const handleOffline=()=>{
            setIsOnline(false)
        }

        window.addEventListener("online",handleOnline)
        window.addEventListener("offline",handleOffline)

        return ()=>{
            window.removeEventListener("online",handleOnline)
            window.removeEventListener("online",handleOffline)
        }

    },[])


    return isOnline; //Which returns boolean(true or false)
}
export default useOnline;