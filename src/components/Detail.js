import { useLocation } from "react-router-dom";
import noIMG from '../img/No_Image_Available.jpg';
import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";

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
            <Map
      center={{ lat: 36.2683, lng: 127.6358 }}
      style={{ width: "100%", height: "360px" }}
      level={14}
    >
      <MarkerClusterer
        averageCenter={true}
        minLevel={10}
      >
        {clusterPositionsData.positions.map((pos) => (
          <MapMarker
            key={`${pos.lat}-${pos.lng}`}
            position={pos}
          />
        ))}
      </MarkerClusterer>
    </Map>
        </div>
    )
}