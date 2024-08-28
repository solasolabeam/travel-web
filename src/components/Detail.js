import { useLocation } from "react-router-dom";
import noIMG from '../img/No_Image_Available.jpg';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { key } from "../api/key";
import { useEffect, useState } from "react";

export default function Detail() {
    let location = useLocation()
    let detailData = location.state
    console.log('detailData', detailData)

    const [common, setCommon] = useState([])
    const [intro, setIntro] = useState([])

    useEffect(() => {

        // 관광정보의 “기본정보" 조회
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
            setCommon([...data.response.body.items.item])
        }
        // 소개정보조회
        async function detailIntro() {
            var url = 'https://apis.data.go.kr/B551011/KorService1/detailIntro1';
            var params = {
                serviceKey: key,
                numOfRows: '10',
                pageNo: '1',
                MobileOS: 'ETC',
                MobileApp: 'AppTest',
                contentId: detailData.contentid,
                contentTypeId: detailData.contenttypeid,
            };

            const queryString = new URLSearchParams(params).toString();  // url에 쓰기 적합한 querySting으로 return 해준다. 
            const requrl = `${url}?${queryString}&_type=json`;

            const res = await fetch(requrl)
            const data = await res.json();
            setIntro([...data.response.body.items.item])
        }
        
        detailCommon()
        detailIntro()
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
            <div className="detail-map" onClick={()=>console.log(intro)}>
                <Map
                    center={{ lat: detailData.mapy, lng: detailData.mapx }}
                    style={{ width: "100%", height: "400px" }}
                >
                    <MapMarker position={{ lat: detailData.mapy, lng: detailData.mapx }}></MapMarker>
                </Map>
            </div>
            <div className="detail-info">
                {
                    common.length != 0 &&<p dangerouslySetInnerHTML={{__html: common[0].overview}}></p>
                }
            </div>
        </div>
    )
}

