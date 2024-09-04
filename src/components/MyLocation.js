import { useEffect, useState } from "react"
// import getLocation from "../api/locationSearch"
import { Map, MapMarker } from "react-kakao-maps-sdk"
//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import noIMG from '../img/No_Image_Available.jpg';
import { key } from "../api/key";

export default function MyLocation() {
    const [list, setList] = useState([])
    const [lat, setLat] = useState(0)       //위도 Y좌표
    const [lng, setLng] = useState(0)       //경도 X좌표

    useEffect(() => {
        async function getLocation(pos) {
            var url = 'https://apis.data.go.kr/B551011/KorService1/locationBasedList1';
            var params = {
                serviceKey: key,
                numOfRows: '10',
                pageNo: '1',
                MobileOS: 'ETC',
                MobileApp: 'AppTest',
                arrange: 'A', //정렬구분
                mapX: pos.coords.longitude,     //경도
                mapY: pos.coords.latitude,     //위도
                radius: '1500',   //거리반경
                listYN: 'Y',   //목록구분

            };

            const queryString = new URLSearchParams(params).toString();  // url에 쓰기 적합한 querySting으로 return 해준다. 
            const requrl = `${url}?${queryString}&_type=json`;

            setLat(pos.coords.latitude)
            setLng(pos.coords.longitude)

            const res = await fetch(requrl)
            const data = await res.json()

            setList([...data.response.body.items.item])
        }

        function showErrorMsg(error) { // 실패했을때 실행
            switch (error.code) {
                case error.PERMISSION_DENIED: //Geolocation API의 사용 요청을 거부
                    alert("위치 요청을 허용해 주세요!")
                    break;

                case error.POSITION_UNAVAILABLE:
                    alert("가져온 위치 정보를 사용할 수 없습니다.")
                    break;

                case error.TIMEOUT:
                    alert("위치 정보를 가져오기 위한 요청이 허용 시간을 초과했습니다.")
                    break;

                case error.UNKNOWN_ERROR:
                    alert("알 수 없는 오류가 발생!")
                    break;
            }
        }

        navigator.geolocation.getCurrentPosition(getLocation, showErrorMsg);
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
                    center={{ lat: lat, lng: lng }}     //지도의 중심좌표
                    style={{ width: "100%", height: "100%" }}        //지도 크기
                    level={5}                                       //지도 확대 레벨
                >
                    <MapMarker position={{ lat: lat, lng: lng }}></MapMarker>
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
                    <li><span className="material-symbols-outlined">apartment</span>{value.addr1}</li>
                    <li><span className="material-symbols-outlined">call</span>{value.tel}</li>
                </ul>
            </div>
        </div>
    )
}