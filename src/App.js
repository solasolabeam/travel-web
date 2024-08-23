// import logo from './logo.svg';

import { useEffect } from 'react';

import './css/header.scss';

//Components 호출
import Header from './components/Header';
import Category from './components/Category';
import SidoGugun from './components/SidoGugun';
import RecommendPart from './components/RecommendPart';
import Footer from './components/Footer';


//API 호출
import getSido from './api/sido';
import { useDispatch } from 'react-redux';
import { changeSido } from './store/store';

import { Route, Routes, Link } from 'react-router-dom';


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
            <Category />
            <SidoGugun />
            <RecommendPart />
          </>
        } />
        <Route path='/detail' element={<div>상세페이지</div>} />
        <Route path='/about' element={<div>페이지</div>} />
      </Routes>

      <Footer />
    </>
  );
}



export default App;
