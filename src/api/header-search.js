// 지역기반관광정보조회

var url = 'https://apis.data.go.kr/B551011/KorService1/areaBasedList1';
var key = 'WNBEfQ1MXM62Fv6qETObrCjjwWv7ji1iNrMTCVWwk6ET3BB8YmqPhT/uX6boztyIRyPzD40LtfLBGQTcimcXQA==';
var params = {
  serviceKey: key,
  pageNo: '1',
  numOfRows: '6',
  MobileApp: 'AppTest',
  MobileOS: 'ETC',
  listYN: 'Y',
  arrange: 'A',
  contentTypeId: '12',
  // areaCode: '1', // 시/도
  //   sigunguCode: '2', // 구/군
  cat1: 'A01', // 대분류 - 자연
  cat2: 'A0101', // 대분류 - 자연
  cat3: 'A01010800' // 대분류 - 자연
  // keyword: '해'  // 검색어 필수!
};

const queryString = new URLSearchParams(params).toString();  // url에 쓰기 적합한 querySting으로 return 해준다. 
const requrl = `${url}?${queryString}&_type=json`;
const getData = () => fetch(requrl)
  .then(response => response.json());

export default getData;
