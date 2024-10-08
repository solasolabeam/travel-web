import { useCallback, useEffect, useState } from "react"
// import getLocation from "../api/locationSearch"
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk"
//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons"
import noIMG from '../img/No_Image_Available.jpg';
import { key } from "../api/key";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MyLocation() {
    const [list, setList] = useState([])
    const [lat, setLat] = useState(0)       //위도 Y좌표
    const [lng, setLng] = useState(0)       //경도 X좌표
    const [isOpen, setIsOpen] = useState([]) // 인포윈도우 Open 여부를 저장하는 state 입니다.
    const [currentLoc, setCurrentLoc] = useState('')
    const [contentID, setContentID] = useState('') // 컨텐츠 타입

    // 위도경도를 받아서 주소로 변환
    const getAddress = useCallback((lat, lng) => {
        const geocoder = new window.kakao.maps.services.Geocoder();
        const coord = new window.kakao.maps.LatLng(lat, lng);
        const callback = function (result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
                setCurrentLoc(result[0].address.address_name)
            }
        };
        geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    }, [lat]);

    getAddress(lat, lng)

    useEffect(() => {
        // 주변장소 데이터
        async function getLocation(pos) {
            var url = 'https://apis.data.go.kr/B551011/KorService1/locationBasedList1';
            var params = {
                serviceKey: key,
                numOfRows: '100',
                pageNo: '1',
                MobileOS: 'ETC',
                MobileApp: 'AppTest',
                contentTypeId: contentID,
                arrange: 'A', //정렬구분
                mapX: pos.coords.longitude,     //경도
                mapY: pos.coords.latitude,     //위도
                radius: '2000',   //거리반경
                listYN: 'Y',   //목록구분

            };

            const queryString = new URLSearchParams(params).toString();  // url에 쓰기 적합한 querySting으로 return 해준다. 
            const requrl = `${url}?${queryString}&_type=json`;

            setLat(pos.coords.latitude)
            setLng(pos.coords.longitude)

            const res = await fetch(requrl)
            const data = await res.json()

            let item = data.response.body.items.item
            //관광지 문화시설 행사 숙박 건만
            item = item.filter(v => {
                return v.contenttypeid == '12' || v.contenttypeid == '14' || v.contenttypeid == '15' || v.contenttypeid == '32'
            })
            setList([...item])

            let array = []
            list.forEach(v => {
                array.push(false)
            })
            setIsOpen(array)
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

    }, [contentID])

    return (
        <div className="loc-container">
            <div className="loc-list">
                <div className="loc-list-search">
                    <div>
                        {lat != 0 ? <><FontAwesomeIcon icon={faCrosshairs} /><span>  {currentLoc}</span></> : <span>위치정보 권한을 허용해주세요</span>}
                    </div>
                    <div>
                        <ul>
                            <li onClick={() => setContentID('')}>전체</li>
                            <li onClick={() => setContentID('12')}>관광지</li>
                            <li onClick={() => setContentID('14')}>문화시설</li>
                            <li onClick={() => setContentID('15')}>행사</li>
                            <li onClick={() => setContentID('32')}>숙박</li>
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
                    <MapMarker position={{ lat: lat, lng: lng }} />

                    {
                        list.map((v, i) => {
                            return (
                                <MapMarker
                                    position={{ lat: v.mapy, lng: v.mapx }}
                                    image={{
                                        src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
                                        size: {
                                            width: 24,
                                            height: 35
                                        }, // 마커이미지의 크기입니다
                                    }}
                                    onClick={() => {
                                        isOpen[i] = !isOpen[i]
                                        setIsOpen([...isOpen])
                                    }}
                                ></MapMarker>
                            )
                        })
                    }
                    {
                        list.map((v, i) => {
                            return (
                                <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
                                    position={{
                                        lat: `${v.mapy}`,
                                        lng: `${v.mapx}`,
                                    }}
                                >
                                    {/* 커스텀 오버레이에 표시할 내용입니다 */}
                                    {
                                        isOpen[i] &&
                                        <div className="overlay-container">
                                            <div className="overlay-title">
                                                <p>{v.title}</p>
                                                <p onClick={() => {
                                                    isOpen[i] = !isOpen[i]
                                                    setIsOpen([...isOpen])
                                                }}>
                                                    X</p>
                                            </div>
                                            <div className="overlay-content">
                                                <div className="overlay-content-left">
                                                    {v.firstimage == '' ? <img src={noIMG} /> : <img src={`${v.firstimage.substr(0, 4)}s${v.firstimage.substr(4)}`} />}
                                                </div>
                                                <div className="overlay-content-right">
                                                    <ul>
                                                        <li>{v.addr1}</li>
                                                        <li>{v.tel}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </CustomOverlayMap>
                            )
                        })
                    }
                </Map>
            </div>
        </div>
    )
}

function Around({ value }) {
    let navigate = useNavigate()
    let contentType = useSelector(state => state.contentType)
    let sido = useSelector(state => state.sido)

    function listClick(value) {

        // 콘텐츠 명 setting
        contentType.forEach(item => {
            if (value.contenttypeid == item.code) {
                value['contentName'] = item.name
                value['contentUrl'] = item.url
            }
        })
        // 시/도 명 setting
        sido.forEach(item => {
            if (value.areacode == item.code) {
                value['sidoName'] = item.name
            }
        })

        navigate(`${value.contentUrl}/detail/${value.contentid}`, {
            state: value
        })
    }
    return (
        <div onClick={() => listClick(value)}>
            <div className="list-img">
                <div>
                    {value.firstimage == '' ? <img src={noIMG} /> : <img src={`${value.firstimage.substr(0, 4)}s${value.firstimage.substr(4)}`} />}
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