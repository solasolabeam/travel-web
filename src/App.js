// import logo from './logo.svg';

import './css/header.scss';
import './css/slide.scss';


//Components 호출
import Header from './components/Header';
import SidoGugun from './components/SidoGugun';
import RecommendPart from './components/RecommendPart';
import Footer from './components/Footer';
import Detail from './components/Detail';
import MyLocation from './components/MyLocation';

import { Route, Routes } from 'react-router-dom';
import getContentType from './api/contentType';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            {/* 인기 */}
            <RecommendPart />
          </>
        } />
        {getContentType.map((v, i) => <Route path={v.url} key={v.code} element={<SidoGugun />} />)}
        {getContentType.map((v, i) => <Route path={`${v.url}/detail/:id`} key={v.code} element={<Detail />} />)}
        <Route path='/mylocation' element={<MyLocation />} />
      </Routes>
      <Footer />
    </>
  );
}



export default App;
