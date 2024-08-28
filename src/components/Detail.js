import { useLocation } from "react-router-dom";
import noIMG from '../img/No_Image_Available.jpg';
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function Detail() {
    let location = useLocation()
    let detailData = location.state
    console.log('detailData', detailData)
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
            <div className="detail-map">
                <Map
                    center={{ lat: detailData.mapy, lng: detailData.mapx }}
                    style={{ width: "100%", height: "500px" }}
                >
                    <MapMarker position={{ lat: detailData.mapy, lng: detailData.mapx }}></MapMarker>
                </Map>
            </div>

        </div>
    )
}