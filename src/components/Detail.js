import { useLocation } from "react-router-dom";
import noIMG from '../img/No_Image_Available.jpg';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { key } from "../api/key";
import { useEffect, useState } from "react";

export default function Detail() {
    let location = useLocation()
    let detailData = location.state
    console.log('detailData', detailData)

    const [detail, setDetail] = useState([])

    useEffect(() => {

        //관광정보의 “기본정보" 조회
        async function detailCommon() {
            var url = 'https://apis.data.go.kr/B551011/KorService1/detailCommon1';
            var params = {
                serviceKey: key,
                numOfRows: '10',
                pageNo: '1',
                MobileOS: 'ETC',
                MobileApp: 'AppTest',
                contentId: detailData.contentid,
                defaultYN: 'Y',
                overviewYN: 'Y',
            };

            const queryString = new URLSearchParams(params).toString();  // url에 쓰기 적합한 querySting으로 return 해준다. 
            const requrl = `${url}?${queryString}&_type=json`;

            const res = await fetch(requrl)
            const data = await res.json();
            setDetail([...data.response.body.items.item])
        }
        detailCommon()
    }, [])

    return (
        <div className="detail-container">
            <div className="detail-content">
                <p>{detailData.cat1}</p>
                <hr />
            </div>
            <div className="detail-title">
                <div className="detail-title-top">
                    <div className="tag">
                        <p>{detailData.areacode}</p>
                    </div>
                    <div className="title">
                        <p>{detailData.title}</p>
                        <hr />
                    </div>

                </div>

            </div>
            <div className="detail-img">
                {
                    detailData.firstimage == '' ?
                        <img src={noIMG} />
                        :
                        <img src={detailData.firstimage} />
                }
                <hr />
            </div>
            <div className="detail-map" onClick={()=>console.log(detail)}>
                <Map
                    center={{ lat: detailData.mapy, lng: detailData.mapx }}
                    style={{ width: "100%", height: "500px" }}
                >
                    <MapMarker position={{ lat: detailData.mapy, lng: detailData.mapx }}></MapMarker>
                </Map>
            </div>
            <div className="detail-info">
                {
                    detail.length != 0 &&<p dangerouslySetInnerHTML={{__html: detail[0].overview}}></p>
                }
            </div>
        </div>
    )
}

