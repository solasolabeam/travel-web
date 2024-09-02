// import logo from './logo.svg';

import './css/header.scss';
import './css/slide.scss';
import getSido from './api/sido';

//Components 호출
import Header from './components/Header';
import SidoGugun from './components/SidoGugun';
import RecommendPart from './components/RecommendPart';
import Footer from './components/Footer';
import Detail from './components/Detail';
import MyLocation from './components/MyLocation';

import { Route, Routes, useNavigate } from 'react-router-dom';
import getContentType from './api/contentType';
import { useEffect } from 'react';
import { changeSido } from './store/store';
import { useDispatch } from 'react-redux';





function App() {
  let dispatch = useDispatch()

  useEffect(() => {
    getSido().then((data) => dispatch(changeSido(data.response.body.items.item)))
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<RecommendPart />} />
        {/* <Route path='/*' element={<div>없는페이지</div>} /> */}
        {getContentType.map((v, i) => <Route path={v.url} key={v.code} element={<SidoGugun />} />)}
        {getContentType.map((v, i) => <Route path={`${v.url}/detail/:id`} key={v.code} element={<Detail />} />)}
        <Route path='/mylocation' element={<MyLocation />} />
      </Routes>
      <Footer />
    </>
  );
}



export default App;
