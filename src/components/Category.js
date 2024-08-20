import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCat1CVal, changeCat2CVal, changeCat3CVal, changeContentTypeVal, changeHeaderSearch } from "../store/store";


export default function Category() {
    const [cat1, setCat1] = useState([]);
    const [cat2, setCat2] = useState([]);
    const [cat3, setCat3] = useState([]);

    let dispatch = useDispatch();
    let contentType = useSelector(state => state.contentType)
    let contentTypeVal = useSelector(state => state.contentTypeVal)
    let cat1Val = useSelector(state => state.cat1Val)
    let cat2Val = useSelector(state => state.cat2Val)
    let cat3Val = useSelector(state => state.cat3Val)
    let headerSearch = useSelector(state => state.headerSearch);

    function getCat1(val) {
        var url = 'https://apis.data.go.kr/B551011/KorService1/categoryCode1';
        var key = 'WNBEfQ1MXM62Fv6qETObrCjjwWv7ji1iNrMTCVWwk6ET3BB8YmqPhT/uX6boztyIRyPzD40LtfLBGQTcimcXQA==';
        var params = {
            serviceKey: key,
            numOfRows: '10',
            pageNo: '1',
            MobileOS: 'ETC',
            MobileApp: 'AppTest',
            contentTypeId: val
        };

        const queryString = new URLSearchParams(params).toString();  // url에 쓰기 적합한 querySting으로 return 해준다. 
        const requrl = `${url}?${queryString}&_type=json`;

        fetch(requrl)
            .then(response => response.json())
            .then((data) => {
                setCat1([...data.response.body.items.item])
                dispatch(changeContentTypeVal(val))

                setCat2([])
                setCat3([])
            })
    }

    function getCat2(val) {
        var url = 'https://apis.data.go.kr/B551011/KorService1/categoryCode1';
        var key = 'WNBEfQ1MXM62Fv6qETObrCjjwWv7ji1iNrMTCVWwk6ET3BB8YmqPhT/uX6boztyIRyPzD40LtfLBGQTcimcXQA==';
        var params = {
            serviceKey: key,
            numOfRows: '10',
            pageNo: '1',
            MobileOS: 'ETC',
            MobileApp: 'AppTest',
            contentTypeId: contentTypeVal,
            cat1: val
        };

        const queryString = new URLSearchParams(params).toString();  // url에 쓰기 적합한 querySting으로 return 해준다. 
        const requrl = `${url}?${queryString}&_type=json`;

        fetch(requrl)
            .then(response => response.json())
            .then((data) => {
                setCat2([...data.response.body.items.item]);
                dispatch(changeCat1CVal(val));
                setCat3([])
            })
    }

    function getCat3(val) {
        var url = 'https://apis.data.go.kr/B551011/KorService1/categoryCode1';
        var key = 'WNBEfQ1MXM62Fv6qETObrCjjwWv7ji1iNrMTCVWwk6ET3BB8YmqPhT/uX6boztyIRyPzD40LtfLBGQTcimcXQA==';
        var params = {
            serviceKey: key,
            numOfRows: '10',
            pageNo: '1',
            MobileOS: 'ETC',
            MobileApp: 'AppTest',
            contentTypeId: contentTypeVal,
            cat1: cat1Val,
            cat2: val
        };

        const queryString = new URLSearchParams(params).toString();  // url에 쓰기 적합한 querySting으로 return 해준다. 
        const requrl = `${url}?${queryString}&_type=json`;

        fetch(requrl)
            .then(response => response.json())
            .then((data) => {
                setCat3([...data.response.body.items.item]);
                dispatch(changeCat2CVal(val))
            })
    }

    function cat3Click(val) {
        var url = 'https://apis.data.go.kr/B551011/KorService1/areaBasedList1';
        var key = 'WNBEfQ1MXM62Fv6qETObrCjjwWv7ji1iNrMTCVWwk6ET3BB8YmqPhT/uX6boztyIRyPzD40LtfLBGQTcimcXQA==';
        var params = {
            serviceKey: key,
            numOfRows: '6',
            pageNo: '1',
            MobileOS: 'ETC',
            MobileApp: 'AppTest',
            listYN: 'Y',
            arrange: 'A',
            contentTypeId: contentTypeVal,
            cat1: cat1Val,
            cat2: cat2Val,
            cat3: val
        };

        const queryString = new URLSearchParams(params).toString();  // url에 쓰기 적합한 querySting으로 return 해준다. 
        const requrl = `${url}?${queryString}&_type=json`;
        fetch(requrl)
            .then(response => response.json())
            .then((data) => {
                dispatch(changeHeaderSearch([...data.response.body.items.item]))
                dispatch(changeCat3CVal(val));
            })
    }



    return (
        <div className='category-container'>
            <p>카테고리별 추천</p>
            <ul>
                {
                    contentType.map((v, i) => {
                        return (
                            <li key={v.code} onClick={() => getCat1(v.code)} >{v.name}</li>
                        )
                    })
                }
            </ul>
            {
                cat1.length != 0 &&
                <ul>
                    {
                        cat1.map((v, i) => {
                            return (
                                <li key={v.code} onClick={() => getCat2(v.code)} >{v.name}</li>
                            )
                        })
                    }
                </ul>
            }
            {
                cat2.length != 0 &&
                <ul>
                    {
                        cat2.map((v, i) => {
                            return (
                                <li key={v.code} onClick={() => getCat3(v.code)} >{v.name}</li>
                            )
                        })
                    }
                </ul>
            }
            {
                cat3.length != 0 &&
                <ul>
                    {
                        cat3.map((v, i) => {
                            return (
                                <li key={v.code} onClick={() => cat3Click(v.code)} >{v.name}</li>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}