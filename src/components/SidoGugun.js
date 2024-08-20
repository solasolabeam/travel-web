import { useDispatch, useSelector } from "react-redux";
import { changeGugun, changeGugunVal, changeSidoVal } from '../store/store';

export default function SidoGugun() {
    let dispatch = useDispatch();
    let sido = useSelector(state => state.sido);
    let sidoVal = useSelector(state=>state.sidoVal);
    let gugun = useSelector(state=>state.gugun);
    let gugunVal = useSelector(state=>state.gugunVal);
    
    function sidoChange(e) {
        var url = 'http://apis.data.go.kr/B551011/KorService1/areaCode1';
        var key = 'WNBEfQ1MXM62Fv6qETObrCjjwWv7ji1iNrMTCVWwk6ET3BB8YmqPhT/uX6boztyIRyPzD40LtfLBGQTcimcXQA==';
        var params = {
          serviceKey: key,
          areaCode: e.target.value,
          numOfRows: '10',
          pageNo: '1',
          MobileOS: 'ETC',
          MobileApp: 'AppTest',
        };
    
        const queryString = new URLSearchParams(params).toString();  // url에 쓰기 적합한 querySting으로 return 해준다. 
        const requrl = `${url}?${queryString}&_type=json`;
        fetch(requrl)
          .then((response) => response.json())
          .then((data) => {
            dispatch(changeGugun([...data.response.body.items.item]))
          })
        dispatch(changeGugunVal(0))
        dispatch(changeSidoVal(e.target.value))
      }

    return (
        <div className='category-search-container'>
            <select name='sido' onChange={(e) => sidoChange(e)} value={sidoVal}>
                <option value='0' disabled>시/도</option>
                {
                    sido.map((v, i) => {
                        return (
                            <option value={v.code} key={v.code}>{v.name}</option>
                        )
                    })
                }
            </select>
            <select name='gugun' value={gugunVal} onChange={(e) => { dispatch(changeGugunVal(e.target.value)) }}>
                <option value='0' disabled>구/군</option>
                {
                    gugun.map((v, i) => {
                        return (
                            <option value={v.code} key={v.code}>{v.name}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}