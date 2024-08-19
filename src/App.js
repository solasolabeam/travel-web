// import logo from './logo.svg';

import { useEffect, useState } from 'react';

import './css/header.scss';

//Components 호출
import Header from './components/Header';
import Category from './components/Category';
// import SidoGugun from './api/SidoGugun';
import CardPart from './components/CardPart';
import RecommendPart from './components/RecommendPart';
import Footer from './components/Footer';

//Img 호출

import mainImg1 from './img/img1.png';

//API 호출
import getContentType from './api/contentType';
import getSido from './api/sido';
import getGugun from './api/gugun';
// import getCat1 from './api/cat1';
import getHeaderSearch from './api/header-search';
import getKeywordSearch from './api/keyword-search';




function App() {

  const [sido, setSido] = useState([]);
  const [sidoVal, setSidoVal] = useState('0');
  const [gugun, setGugun] = useState([]);
  const [gugunVal, setGugunVal] = useState('0');

  const [headerSearch, setHeaderSearch] = useState([]);
  const [pageNo, setPageNo] = useState(1);






  useEffect(() => {
    getSido().then((data) => setSido(data.response.body.items.item))

    // getCategory().then((data) => setCategory(data.response.body.items.item))

    // setContentType(getContentType);

    getHeaderSearch().then((data) => setHeaderSearch(data.response.body.items.item))
  }, []);


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
        setGugun([...data.response.body.items.item])
        setSidoVal(e.target.value)
        setGugunVal(0)
      })
  }


  return (
    <>
      <Header />
      <Category  />
      
      {/* <SidoGugun /> */}

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
        <select name='gugun' value={gugunVal} onChange={(e) => { setGugunVal(e.target.value) }}>
          <option value='0' disabled>구/군</option>
          {
            gugun.map((v, i) => {
              return (
                <option value={v.code} key={v.code}>{v.name}</option>
              )
            })
          }
        </select>



        {/* <Select options={online} //위에서 만든 배열을 select로 넣기
                onChange={setSelectOnline} //값이 바뀌면 setState되게
                defaultValue={online[0]} key={online[0]} /> */}

        {/* <input type='text' key={0}></input> */}

        {/* <button onClick={() => btnClick('prev')}><FontAwesomeIcon icon={faArrowLeft} /></button>
        <button onClick={() => btnClick('next')}><FontAwesomeIcon icon={faArrowRight} /></button> */}
        
      </div>
      <CardPart headerSearch={headerSearch} />
      <RecommendPart sido={sido} />
      <Footer />

    </>
  );
}



export default App;
