//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import noIMG from '../img/No_Image_Available.jpg';

export default function CardPart(props) {
    return (
        <div className='card-container'>
            {
                props.headerSearch.map((v, i) => {
                    return (
                        <div className='card-layout'>
                            <div className='card-area'>
                                {
                                    v.firstimage == '' ? <img src={noIMG} /> : <img src={v.firstimage} />
                                }

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
    )
}