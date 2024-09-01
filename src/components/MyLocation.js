import { useEffect } from "react"
import getLocation from "../api/locationSearch"

export default function MyLocation() {
    useEffect(()=>{
        getLocation().then((data) => console.log('data', data.response.body.items.item))
    },[])
    
    return (
        <></>
    )
}