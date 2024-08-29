import { useLocation } from "react-router-dom";
import noIMG from '../img/No_Image_Available.jpg';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { key } from "../api/key";
import getCat1 from "../api/cat1";

export default function Detail() {
    let location = useLocation()
    let detailData = location.state

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
                <p>{detailData.contentName}</p>
                <hr />
            </div>
            <div className="detail-title">
                <div className="detail-title-top">
                    <div className="tag">
                        <p>{detailData.cat1Name}</p>
                    </div>
                    <div className="title">
                        <p>{detailData.title}</p>
                        <p><FontAwesomeIcon icon={faLocationDot} />  {detailData.addr1}</p>
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
            </div>
            <div className="detail-info">
                <div>
                    {
                        common.length != 0 && <p dangerouslySetInnerHTML={{ __html: common[0].overview }}></p>
                    }
                </div>
                <div>
                    <p className="botton-info">Info</p>
                    {
                        intro.map((v, i) => {
                            return (
                                <>
                                    {v.contenttypeid == 12 && <Tour value={v} />}
                                    {v.contenttypeid == 14 && <Culture value={v} />}
                                    {v.contenttypeid == 15 && <Event value={v} />}
                                    {v.contenttypeid == 32 && <Hotel value={v} />}
                                </>
                            )
                        })
                    }
                </div>


            </div>

            <div className="detail-map">
                <Map
                    center={{ lat: detailData.mapy, lng: detailData.mapx }}
                    style={{ width: "100%", height: "400px" }}
                >
                    <MapMarker position={{ lat: detailData.mapy, lng: detailData.mapx }}></MapMarker>
                </Map>
            </div>

        </div>
    )
}

function Tour({ value }) {
    return (
        <>
            <div><span className="tag">수용인원</span><span dangerouslySetInnerHTML={{ __html: value.accomcount }}></span></div>
            <div><span className="tag">유모차대여정보</span><span dangerouslySetInnerHTML={{ __html: value.chkbabycarriage }}></span></div>
            <div><span className="tag">신용카드가능정보</span><span dangerouslySetInnerHTML={{ __html: value.chkcreditcard }}></span></div>
            <div><span className="tag">애완동물동반가능정보</span><span dangerouslySetInnerHTML={{ __html: value.chkpet }}></span></div>
            <div><span className="tag">체험가능연령</span><span dangerouslySetInnerHTML={{ __html: value.expagerange }}></span></div>
            <div><span className="tag">체험안내</span><span dangerouslySetInnerHTML={{ __html: value.expguide }}></span></div>
            <div><span className="tag">개장일</span><span dangerouslySetInnerHTML={{ __html: value.opendate }}></span></div>
            <div><span className="tag">주차시설</span><span dangerouslySetInnerHTML={{ __html: value.parking }}></span></div>
            <div><span className="tag">쉬는날</span><span dangerouslySetInnerHTML={{ __html: value.restdate }}></span></div>
            <div><span className="tag">이용시기</span><span dangerouslySetInnerHTML={{ __html: value.useseason }}></span></div>
            <div><span className="tag">이용시간</span><span dangerouslySetInnerHTML={{ __html: value.usetime }}></span></div>
        </>
    )
}

function Culture({ value }) {
    return (
        <>
            <div><span className="tag">규모</span><span dangerouslySetInnerHTML={{ __html: value.scale }}></span></div>
            <div><span className="tag">이용요금</span><span dangerouslySetInnerHTML={{ __html: value.usefee }}></span></div>
            <div><span className="tag">문의및안내</span><span dangerouslySetInnerHTML={{ __html: value.infocenterculture }}></span></div>
            <div><span className="tag">이용시간</span><span dangerouslySetInnerHTML={{ __html: value.usetimeculture }}></span></div>
            <div><span className="tag">쉬는날</span><span dangerouslySetInnerHTML={{ __html: value.restdateculture }}></span></div>
            <div><span className="tag">주차시설</span><span dangerouslySetInnerHTML={{ __html: value.parkingculture }}></span></div>
            <div><span className="tag">신용카드가능정보</span><span dangerouslySetInnerHTML={{ __html: value.chkcreditcardculture }}></span></div>
        </>
    )
}
function Event({ value }) {
    return (
        <>
            <div><span className="tag">관람가능연령</span><span dangerouslySetInnerHTML={{ __html: value.agelimit }}></span></div>
            <div><span className="tag">관람소요시간</span><span dangerouslySetInnerHTML={{ __html: value.spendtime }}></span></div>
            <div><span className="tag">주최자정보</span><span dangerouslySetInnerHTML={{ __html: value.sponsor1 }}></span></div>
            <div><span className="tag">주최자연락처</span><span dangerouslySetInnerHTML={{ __html: value.sponsor1tel }}></span></div>
            <div><span className="tag">주관사정보</span><span dangerouslySetInnerHTML={{ __html: value.sponsor2 }}></span></div>
            <div><span className="tag">주관사연락처</span><span dangerouslySetInnerHTML={{ __html: value.sponsor2tel }}></span></div>
            <div><span className="tag">공연시간</span><span dangerouslySetInnerHTML={{ __html: value.playtime }}></span></div>
            <div><span className="tag">이용요금</span><span dangerouslySetInnerHTML={{ __html: value.usetimefestival }}></span></div>
            <div><span className="tag">행사장소</span><span dangerouslySetInnerHTML={{ __html: value.eventplace }}></span></div>
            <div><span className="tag">행사시작일</span><span dangerouslySetInnerHTML={{ __html: value.eventstartdate }}></span></div>
            <div><span className="tag">행사종료일</span><span dangerouslySetInnerHTML={{ __html: value.eventenddate }}></span></div>
        </>
    )
}
function Hotel({ value }) {
    return (
        <>
            <div><span className="tag">규모</span><span dangerouslySetInnerHTML={{ __html: value.scalelodging }}></span></div>
            <div><span className="tag">수용가능인원</span><span dangerouslySetInnerHTML={{ __html: value.accomcountlodging }}></span></div>
            <div><span className="tag">입실시간</span><span dangerouslySetInnerHTML={{ __html: value.checkintime }}></span></div>
            <div><span className="tag">퇴실시간</span><span dangerouslySetInnerHTML={{ __html: value.checkouttime }}></span></div>
            <div><span className="tag">객실유형</span><span dangerouslySetInnerHTML={{ __html: value.roomtype }}></span></div>
            <div><span className="tag">객실내취사여부</span><span dangerouslySetInnerHTML={{ __html: value.chkcooking }}></span></div>
            <div><span className="tag">식음료장</span><span dangerouslySetInnerHTML={{ __html: value.foodplace }}></span></div>
            <div><span className="tag">환불규정</span><span dangerouslySetInnerHTML={{ __html: value.refundregulation }}></span></div>
            <div><span className="tag">주차시설</span><span dangerouslySetInnerHTML={{ __html: value.parkinglodging }}></span></div>
            <div><span className="tag">픽업서비스</span><span dangerouslySetInnerHTML={{ __html: value.pickup }}></span></div>
            <div><span className="tag">문의및안내</span><span dangerouslySetInnerHTML={{ __html: value.infocenterlodging }}></span></div>
            <div><span className="tag">예약안내</span><span dangerouslySetInnerHTML={{ __html: value.reservationlodging }}></span></div>
        </>
    )
}

