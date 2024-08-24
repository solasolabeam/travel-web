import { useNavigate } from "react-router-dom";


export default function Header() {
  let navigate = useNavigate();

  return (
    <>
      <div className='header-container'>
        <div>
          <span style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>TITLE</span>
        </div>
        <div style={{ textAlign: 'right' }} ><span>로그인</span></div>
      </div>

      <div className='header-bg'>
        <div>
          {/* <img src={mainImg1} /> */}
        </div>
      </div>
    </>
  )
};
