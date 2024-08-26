// import logo from './logo.svg';

import { useEffect } from 'react';

import './css/header.scss';

//Components 호출
import Header from './components/Header';
import SidoGugun from './components/SidoGugun';
import RecommendPart from './components/RecommendPart';
import Footer from './components/Footer';

//API 호출
import getSido from './api/sido';
import { useDispatch } from 'react-redux';
import { changeSido } from './store/store';

import { Route, Routes, useNavigate } from 'react-router-dom';

import getContentType from './api/contentType';


function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    getSido().then((data) => dispatch(changeSido(data.response.body.items.item)))
    // getHeaderSearch().then((data) => dispatch(changeHeaderSearch(data.response.body.items.item)))
  }, []);

  return (
    <>

      <Header />

      <Routes>
        <Route path='/' element={
          <>
            <RecommendPart />
          </>
        } />

        <Route path='/*' element={<div>없는페이지</div>} />
        {
          getContentType.map((v, i) => {
            return (
              <Route path={v.url} element={
                <>
                  <SidoGugun />
                </>
              } />
            )
          })
        }
      </Routes>

      <Footer />
    </>
  );
}



export default App;
