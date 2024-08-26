import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeCat1CVal, changeCat2CVal, changeCat3CVal, changeContentTypeVal } from "../store/store";



export default function Header() {
  let contentType = useSelector(state => state.contentType)
  let dispatch = useDispatch()
  let navigate = useNavigate()

  function getSubCat(code) {
    dispatch(changeContentTypeVal(code))
    if (code == 12) {     //관광지
      dispatch(changeCat1CVal('A01'))
      dispatch(changeCat2CVal('A0101'))
      dispatch(changeCat3CVal(''))
    } else if (code == 14) {  //문화시설
      dispatch(changeCat1CVal('A02'))
      dispatch(changeCat2CVal('A0206'))
      dispatch(changeCat3CVal(''))
    } else if (code == 15) {  //축제/공연
      dispatch(changeCat1CVal('A02'))
      dispatch(changeCat2CVal('A0208'))
      dispatch(changeCat3CVal(''))
    } else if (code == 32) {  //숙박
      dispatch(changeCat1CVal('B02'))
      dispatch(changeCat2CVal('B0201'))
      dispatch(changeCat3CVal(''))
    }
  }

  return (
    <>
      <div className='header-container'>
        <div>
          <span style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>TITLE</span>
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
        <div>
          {/* <img src={mainImg1} /> */}
        </div>
      </div>


    </>
  )
};
