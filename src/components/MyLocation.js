import { useEffect, useState } from "react"
import getLocation from "../api/locationSearch"
import { Map, MapMarker } from "react-kakao-maps-sdk"
//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import noIMG from '../img/No_Image_Available.jpg'

export default function MyLocation() {

    const [list, setList] = useState([])

    useEffect(() => {
        console.log('cc')
        getLocation().then((data) => setList([...data.response.body.items.item]))
    }, [])

    return (
        <div className="loc-container">
            <div className="loc-list">
                <div className="loc-list-search">
                    <div>
                        <input />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
                    </div>
                    <div>
                        <ul>
                            <li>관광지</li>
                            <li>문화시설</li>
                            <li>행사</li>
                            <li>숙박</li>
                        </ul>
                    </div>

                </div>
                <div className="loc-list-result">
                    {
                        list.map((v, i) => {
                            return (
                                <Around value={v} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="loc-map">
                <Map
                    center={{ lat: 37.563446, lng: 126.983745 }}     //지도의 중심좌표
                    style={{ width: "100%", height: "100%" }}        //지도 크기
                    level={3}                                       //지도 확대 레벨
                >
                    <MapMarker position={{ lat: 37.563446, lng: 126.983745 }}></MapMarker>
                    {
                        list.map((v, i) => {
                            return (
                                <MapMarker position={{ lat: v.mapy, lng: v.mapx }}></MapMarker>
                            )
                        })
                    }
                </Map>
            </div>
        </div>
    )
}

function Around({ value }) {
    return (
        <div>
            <div className="list-img">
                <div>
                    {value.firstimage == '' ? <img src={noIMG} /> : <img src={value.firstimage} />}
                </div>
            </div>
            <div className="list-item">
                <ul>
                    <li>{value.title}</li>
                    <li><span class="material-symbols-outlined">apartment</span>{value.addr1}</li>
                    <li><span class="material-symbols-outlined">call</span>{value.tel}</li>
                </ul>
            </div>
        </div>
    )
}