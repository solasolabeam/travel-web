//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import noIMG from '../img/No_Image_Available.jpg';
import { useDispatch, useSelector } from "react-redux";
import { changeRow } from "../store/store";

export default function CardPart() {
    let dispatch = useDispatch()
    let headerSearch = useSelector(state => state.headerSearch)
    let addRow = useSelector(state => state.addRow);

    function getRow() {
        dispatch(changeRow(addRow + 1))
    }


    return (
        <>
            <div className='card-container' style={{ gridTemplateRows: `repeat(${addRow},500px)` }}>
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
                <button onClick={() => { getRow() }}>더보기</button>
            </div>
        </>
    )
}
