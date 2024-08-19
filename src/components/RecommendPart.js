export default function RecommendPart(props) {
  return (
    <div className='local-container'>
      <p>국내 지역별 여행지 추천</p>
      <div className='local-griad-container'>
        {
          props.sido.map((v, i) => {
            return (
              <div key={v.code}>
                <p>{v.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}