import { useEffect } from "react"
import getLocation from "../api/locationSearch"
import { Map, MapMarker } from "react-kakao-maps-sdk"

export default function MyLocation() {
    useEffect(() => {
        getLocation().then((data) => console.log('data', data.response.body.items.item))
    }, [])

    return (
        <div className="loc-container">
            <div className="loc-list">
                <div className="loc-list-item">
                </div>
            </div>
            <div className="loc-map">
                <Map
                    center={{ lat: 37.563446, lng: 126.983745 }}
                    style={{ width: "100%", height: "100%" }}
                >
                    <MapMarker position={{ lat: 37.563446, lng: 126.983745 }}></MapMarker>
                    <MapMarker position={{ lat: 37.5634380519, lng: 126.9847483173 }}></MapMarker>
                </Map>
            </div>
        </div>
    )
}