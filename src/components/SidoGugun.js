import { useDispatch, useSelector } from "react-redux";
import { changeGugun, changeGugunVal, changeHeaderSearch, changeKeyword, changeSidoVal } from '../store/store';
import { useState } from "react";

export default function SidoGugun() {
    const [text, setText] = useState('')

    let dispatch = useDispatch()
    let sido = useSelector(state => state.sido)
    let sidoVal = useSelector(state => state.sidoVal)
    let gugun = useSelector(state => state.gugun)
    let gugunVal = useSelector(state => state.gugunVal)
    let keyword = useSelector(state => state.keyword)

    let contentTypeVal = useSelector(state => state.contentTypeVal)
    let cat1Val = useSelector(state => state.cat1Val)
    let cat2Val = useSelector(state => state.cat2Val)
    let cat3Val = useSelector(state => state.cat3Val)

    function sidoChange(e) {
        var url = 'http://apis.data.go.kr/B551011/KorService1/areaCode1';
        var key = 'WNBEfQ1MXM62Fv6qETObrCjjwWv7ji1iNrMTCVWwk6ET3BB8YmqPhT/uX6boztyIRyPzD40LtfLBGQTcimcXQA==';
        var params = {
            serviceKey: key,
            areaCode: e.target.value,
            numOfRows: '80',
            pageNo: '1',
            MobileOS: 'ETC',
            MobileApp: 'AppTest',
        };

        const queryString = new URLSearchParams(params).toString();  // url에 쓰기 적합한 querySting으로 return 해준다. 
        const requrl = `${url}?${queryString}&_type=json`;
        fetch(requrl)
            .then((response) => response.json())
            .then((data) => {
                if(e.target.value == '') {
                    dispatch(changeGugun([]))
                } else {
                    dispatch(changeGugun([...data.response.body.items.item]))
                }
            })
        dispatch(changeGugunVal(''))
        dispatch(changeSidoVal(e.target.value))
    }
    function activeEnter(e) {
        console.log('cat1Val', cat1Val);
        console.log('cat2Val', cat2Val);
        console.log('cat3Val', cat3Val);
        if(e.keyCode == '13') {
            activeSearch();
        }
    }
    function activeSearch() {
        if (keyword == '') {
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
                areaCode: sidoVal, // 시/도
                sigunguCode: gugunVal, // 구/군
                cat1: cat1Val,
                cat2: cat2Val,
                cat3: cat3Val,
            };

            const queryString = new URLSearchParams(params).toString();  // url에 쓰기 적합한 querySting으로 return 해준다. 
            const requrl = `${url}?${queryString}&_type=json`;
            fetch(requrl)
                .then(response => response.json())
                .then((data) => {
                    dispatch(changeHeaderSearch([...data.response.body.items.item]))
                })
        } else {
            var url = 'https://apis.data.go.kr/B551011/KorService1/searchKeyword1';
            var key = 'WNBEfQ1MXM62Fv6qETObrCjjwWv7ji1iNrMTCVWwk6ET3BB8YmqPhT/uX6boztyIRyPzD40LtfLBGQTcimcXQA==';
            var params = {
                serviceKey: key,
                MobileApp: 'AppTest',
                MobileOS: 'ETC',
                pageNo: '1',
                numOfRows: '6',
                listYN: 'Y',
                arrange: 'A',
                contentTypeId: contentTypeVal,
                areaCode: sidoVal, // 시/도
                sigunguCode: gugunVal, // 구/군
                cat1: cat1Val,
                cat2: cat2Val,
                cat3: cat3Val,
                keyword: keyword  // 검색어 필수!
            };

            const queryString = new URLSearchParams(params).toString();  // url에 쓰기 적합한 querySting으로 return 해준다. 
            const requrl = `${url}?${queryString}&_type=json`;

            fetch(requrl)
                .then(response => response.json())
                .then((data) => {
                    if (data.response.body.items.length == 0) {
                        dispatch(changeHeaderSearch([]))
                    } else {
                        dispatch(changeHeaderSearch([...data.response.body.items.item]))
                    }

                })
        }
    }

    return (
        <div className='category-search-container'>
            <select className="sido-select" name='sido' onChange={(e) => sidoChange(e)} value={sidoVal}>
                <option value=''>시/도</option>
                {
                    sido.map((v, i) => {
                        return (
                            <option value={v.code} key={v.code}>{v.name}</option>
                        )
                    })
                }
            </select>
            <select className="gugun-select" name='gugun' value={gugunVal} onChange={(e) => { dispatch(changeGugunVal(e.target.value)) }}>
                <option value='' >구/군</option>
                {
                    gugun.map((v, i) => {
                        return (
                            <option value={v.code} key={v.code}>{v.name}</option>
                        )
                    })
                }
            </select>
            <input type="text" value={keyword} onChange={(e) => dispatch(changeKeyword(e.target.value))} onKeyUp={(e) => activeEnter(e)} />
        </div>
    )
}