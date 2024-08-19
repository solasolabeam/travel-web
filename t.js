function getCat1(val) {
    var url = 'https://apis.data.go.kr/B551011/KorService1/categoryCode1';
    var key = 'WNBEfQ1MXM62Fv6qETObrCjjwWv7ji1iNrMTCVWwk6ET3BB8YmqPhT/uX6boztyIRyPzD40LtfLBGQTcimcXQA==';
    var params = {
      serviceKey: key,
      numOfRows: '10',
      pageNo: '1',
      MobileOS: 'ETC',
      MobileApp: 'AppTest',
      contentTypeId: val
    };
    
    const queryString = new URLSearchParams(params).toString();  // url에 쓰기 적합한 querySting으로 return 해준다. 
    const requrl = `${url}?${queryString}&_type=json`;
    
    fetch(requrl)
      .then(response => response.json())
      .then((data)=>{
        setCat1([...data.response.body.items.item])
      })
    setContentTypeVal(val);
}