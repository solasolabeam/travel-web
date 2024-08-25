import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCat1CVal, changeCat2CVal, changeCat3CVal, changeContentTypeVal, changeHeaderSearch, changeRow } from "../store/store";
import { useNavigate } from "react-router-dom";
import { key } from "../api/key";

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

    useEffect(() => {
        async function tourAPI() {
            var url = 'https://apis.data.go.kr/B551011/KorService1/categoryCode1';
            var params = {
                serviceKey: key,
                numOfRows: '10',
                pageNo: '1',
                MobileOS: 'ETC',
                MobileApp: 'AppTest',
                contentTypeId: contentTypeVal,
                cat1: cat1Val,
                cat2: cat2Val,
                cat3: cat3Val,
            };
            const queryString = new URLSearchParams(params).toString();  // url에 쓰기 적합한 querySting으로 return 해준다. 
            const requrl = `${url}?${queryString}&_type=json`;

            let response = await fetch(requrl)
            let data = await response.json()
            setCat1([...data.response.body.items.item])
        }

        tourAPI()
    }, [contentTypeVal])

    return (
        <>
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