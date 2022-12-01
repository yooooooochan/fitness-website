![logo](https://i.ibb.co/PMd12pf/png.png)



# :muscle:SKKU - Fitness
>운동 및 건강 관리에 관심이 있는 학우들을 위해 편의기능을 제공하는 웹페이지입니다

<i>[소개 동영상 (Youtube)](https://youtube.com)</i>

# Features
### `Calendar`
운동 루틴을 기록할 수 있도록 달력 기능을 제공합니다.
### `Find Your Exercise`
본인에게 필요한 운동을 검색하고 소모 칼로리 등을 확인 할 수 있습니다.
### `Calory Calculator`
오늘 먹은 음식과 수행한 운동을 검색해서 칼로리 계산을 수행할 수 있습니다.
### `Find a Partner`
성균관대 주변의 헬스장 정보를 찾거나 같이할 파트너를 찾아볼 수 있습니다.

# Screenshots
![screenshot](https://i.ibb.co/8xHwLgw/map.png)

# Installation (for Admin)
### `Setup .env file`
지도 기능을 활성화 하기 위해서 루트 디렉터리의 .env 파일을 만들고 카카오맵 api key를 작성하셔야 합니다.
```javascript
REACT_APP_KAKAOMAP_API_KEY=~~~writeyourkey~~~
```

### `Write your IP/domain`
루트 디렉토리의 package.json에서 도메인을 설정해주세요.
```json
"homepage": "https://your.domain/subdomain",
```
### `npm install`
본 프로젝트는 [리액트](https://github.com/facebook/create-react-app)를 사용했습니다.\
 리액트를 비롯한 의존성들을 전부 설치해주세요.
### `npm start`

로컬에서 테스트 하려면 본 명령어로 서버를 실행하면
[http://localhost:3000](http://localhost:3000) 에서 결과를 볼 수 있습니다.

