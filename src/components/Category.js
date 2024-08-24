import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCat1CVal, changeCat2CVal, changeCat3CVal, changeContentTypeVal, changeHeaderSearch, changeRow } from "../store/store";
import { useNavigate } from "react-router-dom";

import { tour } from "../api/tour";

export default function Category() {
    const [cat1, setCat1] = useState([]);
    const [cat2, setCat2] = useState([]);
    const [cat3, setCat3] = useState([]);

    let contentType = useSelector(state => state.contentType)
    let contentTypeVal = useSelector(state => state.contentTypeVal)
    let cat1Val = useSelector(state => state.cat1Val)
    let cat2Val = useSelector(state => state.cat2Val)
    let cat3Val = useSelector(state => state.cat3Val)

    let navigate = useNavigate()
    let dispatch = useDispatch()

    async function tourAPI(params) {
        var url = 'https://apis.data.go.kr/B551011/KorService1/categoryCode1';
        
        const queryString = new URLSearchParams(params).toString();  // url에 쓰기 적합한 querySting으로 return 해준다. 
        const requrl = `${url}?${queryString}&_type=json`;

        return fetch(requrl).then(response => response.json())
    }

    // async function getSubCat() {
    //     dispatch(changeContentTypeVal(12))
    //     dispatch(changeCat1CVal('A01'))
    //     dispatch(changeCat2CVal('A0101'))
    //     // tourAPI().then(data => setCat1([...data.response.body.items.item]))

    //     let data = await tourAPI()
    //     setCat1([...data.response.body.items.item])
    // }

    async function getSubCat() {
        var key = 'WNBEfQ1MXM62Fv6qETObrCjjwWv7ji1iNrMTCVWwk6ET3BB8YmqPhT/uX6boztyIRyPzD40LtfLBGQTcimcXQA==';
        var params = {
            serviceKey: key,
            numOfRows: '10',
            pageNo: '1',
            MobileOS: 'ETC',
            MobileApp: 'AppTest',
            contentTypeId: 12,
            cat1: 'A01',
            cat2: 'A0101',
            cat3: cat3Val,
        };

        dispatch(changeContentTypeVal(12))
        dispatch(changeCat1CVal('A01'))
        dispatch(changeCat2CVal('A0101'))
        // tourAPI().then(data => setCat1([...data.response.body.items.item]))

        let data = await tourAPI(params)
        setCat1([...data.response.body.items.item])
    }



    return (
        <>
            <div className='category-container'>
                <ul>
                    {
                        contentType.map((v, i) => {
                            return (
                                <li key={v.code} onClick={() => {
                                    getSubCat()
                                    navigate(v.url)
                                }} >{v.name}</li>
                            )
                        })
                    }
                </ul>
                <p>🏆 인기 여행지 추천</p>

            </div>
            <div className="subCat-container">
                {
                    cat1.map((v, i) => {
                        return (
                            <div>{v.name}</div>
                        )
                    })

                }
            </div>
        </>
    )
}