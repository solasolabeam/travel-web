# TripMate 여행 동반자

🔗 Deployment URL
https://travel-web-yja8.vercel.app/


## 프로젝트 소개
_" 다채롭고 아름다운 국내여행지 찾기 "_

> 국내 여행을 즐기며 다양한 지역을 방문하다 보니, 숨겨진 명소나, 
현지의 문화에 대해 더 많은 사람들이 알았으면 하는 마음에서 사이트를 만들기로 결심했습니다.


## 프로젝트 특징

- 한국관광공사 Tour API 데이터 호출
- Kakao Map API를 활용한 지도 서비스
- Redux를 통한 상태관리
- PC/태블릿/모바일에 맞춘 반응형 웹 개발


## 기술 스택

> `React` `Redux` `SCSS` `JavaScript` `Vercel`


## 프로젝트 구성

### 메인페이지

![image.jpg1](https://velog.velcdn.com/images/so2i/post/990c4f86-a746-4b96-ab92-64dbab5018e2/image.PNG) |![image.jpg2](https://velog.velcdn.com/images/so2i/post/2611be5e-5dfa-4cc3-83c4-6bce66593254/image.PNG)
--- | --- | 

메인 페이지에서는 Swiper.js를 통해 여러 이미지나 콘텐츠를 슬라이드 형태로 배치하여 
직관적이고 시각적으로 뛰어난 네비게이션을 구현했습니다. 페이지 로딩 성능을 최적화하고, 
사용자가 손쉽게 콘텐츠를 탐색할 수 있도록 페이지의 주요 섹션마다 반응형 디자인을 적용했습니다.


### 카테고리 검색 및 상세화면

![image.jpg3](https://velog.velcdn.com/images/so2i/post/7bfa3645-04cb-47bb-b306-1db3f550db6b/image.PNG) |![image.jpg4](https://velog.velcdn.com/images/so2i/post/6aa0da24-b79e-4536-ae63-9e3656d6f4c8/image.PNG) |![image.jpg5](https://velog.velcdn.com/images/so2i/post/349601f7-67cd-495f-87d4-6bf163352c39/image.PNG)
--- | --- | --- |

공공데이터 포털에서 제공하는 관광 정보 API를 연동하여, 관광지의 이름, 위치, 사진, 설명 등 다양한 정보를 실시간으로 받아와 화면에 렌더링합니다. 
사용자는 검색 창에 원하는 지역이나 키워드를 입력하면, 관련된 관광지 목록이 즉시 업데이트되어 표시됩니다. 
이 과정에서 React의 상태 관리 기능을 사용해 API 호출과 데이터 처리를 비동기로 처리하여 빠르고 매끄러운 사용자 경험을 제공합니다.

상세 페이지에서는 관광지의 구체적인 설명과 함께, 카카오 맵 API를 사용하여 해당 관광지의 위치를 지도로 표시합니다. 
카카오 맵 API를 통해 사용자는 관광지의 정확한 위치를 확인할 수 있으며, 확대/축소 및 거리 뷰 기능도 제공하여 보다 상세한 위치 탐색이 가능합니다.


### 내 주변장소 찾기

![image.jpg1](https://velog.velcdn.com/images/so2i/post/b47d8c44-3483-4e11-85df-2dce3395d279/image.PNG) |![image.jpg2](https://velog.velcdn.com/images/so2i/post/d8ffca49-7f08-4039-b5dc-d23fb89cef78/image.PNG)
--- | --- | 

Geolocation API를 활용해 사용자의 현재 위치(위도와 경도)를 가져와, 사용자의 위치 정보를 받아온 뒤
Kakao Maps API의 Geocoder 객체를 사용하여 해당 위치를 주소로 변환합니다. 
이렇게 변환된 주소는 사용자가 어디에 있는지 시각적으로 확인할 수 있도록 페이지 상에 표시되며
실시간 위치와 관광지 정보를 한눈에 파악할 수있고 지도 상에서 마커와 함께 거리, 경로 탐색 등의 기능도 사용할 수 있습니다.

## 개발을 하면서...

처음으로 공공데이터 API, React를 함께 사용한 프로젝트입니다.

React는 컴포넌트 기반으로 UI를 효율적으로 관리할 수 있어 처음엔 간편하게 프로젝트를 시작할 수 있었고, 
공공데이터 API를 활용해 실시간 데이터를 불러오는 과정도 흥미로웠습니다. 하지만 프로젝트가 점점 커지면서 
useState와 useEffect만으로 상태 관리를 처리하기엔 한계가 있었고, 이때 Redux의 필요성을 절감하게 되었습니다.

Redux를 도입하면서 상태 관리를 중앙에서 일괄적으로 관리할 수 있었고, 이를 통해 컴포넌트 간의 데이터 전달이 훨씬 더 명확하고 
체계적으로 이루진다는 느낌을 받았습니다. 특히 Redux의 액션과 리듀서 구조 덕분에 상태 변화가 명확해지고, 
복잡한 상태도 쉽게 관리할 수 있었다. 상태 변화가 전역적으로 관리되다 보니 코드의 유지보수성도 크게 향상되었습니다.

결과적으로, 공공데이터 API와 React, Redux를 처음 사용하면서 애플리케이션의 상태 관리와 데이터 흐름을 더 체계적으로 
다루는 방법을 배우게 되었고, 핵심 기능들이 어떻게 구현되는지 경험해볼 수 있었던 프로젝트입니다.





