import { useEffect, useState } from "react";
import getContent from "../api/contentType";


export default function Category() {
    const [contentType, setContentType] = useState(getContent);
    const [contentTypeVal, setContentTypeVal] = useState('');
    const [cat1, setCat1] = useState([]);
    const [cat1Val, setCat1Val] = useState('');
    const [cat2, setCat2] = useState([]);
    const [cat2Val, setCat2Val] = useState('');
    const [cat3, setCat3] = useState([]);
    const [cat3Val, setCat3Val] = useState('');

    const [headerSearch, setHeaderSearch] = useState([]);

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
                setContentTypeVal(val);
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
                setCat1Val(val);
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
                setCat2Val(val);
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
                setHeaderSearch([...data.response.body.items.item]);
                setCat3Val(val);
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