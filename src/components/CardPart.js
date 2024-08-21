//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import noIMG from '../img/No_Image_Available.jpg';
import { useSelector } from "react-redux";

export default function CardPart() {

    let headerSearch = useSelector(state => state.headerSearch)

    return (
        <>
            <div className='card-container'>
                {
                    headerSearch.map((v, i) => {
                        return (
                            <div className='card-layout'>
                                <div className='card-area'>
                                    {v.firstimage == '' ? <img src={noIMG} /> : <img src={v.firstimage} />}
                                </div>
                                <div className='card-area'>
                                    <p className='card-tag'>{v.cat1}</p>
                                    <p className='card-title'>[{v.areacode}] {v.title}</p>
                                    <p className='card-addr'><FontAwesomeIcon icon={faLocationDot} /> {v.addr1}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div className="card-btn">
                <button>더보기</button>
            </div>
        </>
    )
}