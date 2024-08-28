import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeCat1CVal, changeCat2CVal, changeCat3CVal, changeContentTypeVal, changeGugun, changeGugunVal, changeKeyword, changeRow, changeSido, changeSidoVal } from "../store/store";
import Slide from "./Slide";


export default function Header() {
  let contentType = useSelector(state => state.contentType)
  let dispatch = useDispatch()
  let navigate = useNavigate()

  function getSubCat(code) {

    dispatch(changeContentTypeVal(code))
    dispatch(changeSidoVal(''))
    dispatch(changeGugunVal(''))
    dispatch(changeCat3CVal(''))
    dispatch(changeKeyword(''))
    dispatch(changeRow(1))

    if (code == 12) {     //관광지
      dispatch(changeCat1CVal('A01'))
      dispatch(changeCat2CVal('A0101'))
    } else if (code == 14) {  //문화시설
      dispatch(changeCat1CVal('A02'))
      dispatch(changeCat2CVal('A0206'))
    } else if (code == 15) {  //축제/공연
      dispatch(changeCat1CVal('A02'))
      dispatch(changeCat2CVal('A0208'))
    } else if (code == 32) {  //숙박
      dispatch(changeCat1CVal('B02'))
      dispatch(changeCat2CVal('B0201'))
    }
  }

  return (
    <>
      <div className='header-container'>
        <div>
          <span style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>구석구석</span>
        </div>
        <div style={{ textAlign: 'right' }} ><span>로그인</span></div>
      </div>

      <div className='category-container'>
        <ul>
          {
            contentType.map((v, i) => {
              return (
                <li key={v.code} onClick={() => {
                  getSubCat(v.code)
                  navigate(v.url)
                }} >{v.name}</li>
              )
            })
          }
        </ul>
        {/* <p>🏆 인기 여행지 추천</p> */}

      </div>

      <div className='header-bg'>
        <Slide />
      </div>
      


    </>
  )
};
