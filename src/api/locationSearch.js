
//위치기반관광정보조회

var url = 'https://apis.data.go.kr/B551011/KorService1/locationBasedList1';
var key = 'WNBEfQ1MXM62Fv6qETObrCjjwWv7ji1iNrMTCVWwk6ET3BB8YmqPhT/uX6boztyIRyPzD40LtfLBGQTcimcXQA==';
var params = {
  serviceKey: key,
  numOfRows: '10',
  pageNo: '1',
  MobileOS: 'ETC',
  MobileApp: 'AppTest',
  arrange: 'A', //정렬구분
  mapX: '126.983745',     //경도
  mapY: '37.563446',     //위도
  radius: '100',   //거리반경
  listYN: 'Y',   //목록구분

};

const queryString = new URLSearchParams(params).toString();  // url에 쓰기 적합한 querySting으로 return 해준다. 
const requrl = `${url}?${queryString}&_type=json`;

const getLocation = () => fetch(requrl)
  .then(response => response.json());

export default getLocation;
