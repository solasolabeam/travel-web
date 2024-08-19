
var url = 'http://apis.data.go.kr/B551011/KorService1/areaCode1';
var key = 'WNBEfQ1MXM62Fv6qETObrCjjwWv7ji1iNrMTCVWwk6ET3BB8YmqPhT/uX6boztyIRyPzD40LtfLBGQTcimcXQA==';
var params = {
  serviceKey: key,
  numOfRows: '20',
  pageNo: '1',
  MobileOS: 'ETC',
  MobileApp: 'AppTest',
};

const queryString = new URLSearchParams(params).toString();  // url에 쓰기 적합한 querySting으로 return 해준다. 
const requrl = `${url}?${queryString}&_type=json`;

// const getData = () => fetch(requrl).then(response => response.json())
const getData = () => fetch(requrl)
  .then(response => response.json());

// const getData = async () => {
//   const response = await fetch(requrl);
//   const json = await response.json();
//   return json;
// }

export default getData;

