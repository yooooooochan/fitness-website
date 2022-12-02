# SKKU - Fitness

<details>
<summary><h2>목차</h2></summary>
<div markdown="1">       

[1. 프로젝트 소개](#프로젝트-소개)

[2. 시작 가이드](#시작-가이드)

[3. 개발 스택](#개발-스택)

[4. 기능](#기능)

[7. 작성 정보](#작성-정보)

</div>
</details>

## 프로젝트 소개

### 컬리 계정관리 IAM 시스템

프로젝트 진행기간: 2022.10 ~ 2022.12

운동 및 건강 관리에 관심이 있는 학우들을 위해 편의기능을 제공하는 웹페이지입니다.

<br/>

## 시작 가이드

### 요구사항

- Git v2.36.1 이상
    - [https://git-scm.com/downloads](https://git-scm.com/downloads)

- Node.js v18.0.0 이상
    - [https://nodejs.org/en/](https://nodejs.org/en/)

### 설치 및 실행

1. 레포지토리 복제

```bash
git clone https://github.com/yooooooochan/fitness-website.git
cd fitness-website
```

2. 패키지 설치

```bash
npm install
```

3. 환경 변수 설정
    1. root 경로에 `.env` 파일 생성
    2. 카카오맵 API Key 설정
    
    ```bash
    REACT_APP_KAKAOMAP_API_KEY=YOURAPIKEY
    ```
    
4. 프로젝트 실행

```bash
npm start
```

본 명령어를 실행시키면 [http://localhost:3000](http://localhost:3000) 에서 로컬 테스트 결과를 볼 수 있습니다.

<br/>

## 개발 스택

### 사용 기술

<div>

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50" height="50" />

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50" height="50" />

</div>

- React 
    - [https://ko.reactjs.org/](https://ko.reactjs.org/)          
- JavaScript
    - [https://www.ecma-international.org/publications-and-standards/standards/ecma-262/](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

### 패키지

- Material-UI
    - UI Framework
    - [https://mui.com/](https://mui.com/)
- gh-pages
    - Github repository 배포
    - [https://pages.github.com/](https://pages.github.com/)
- react-calendar
    - React용 달력 컴포넌트
    - [https://projects.wojtekmaj.pl/react-calendar/](https://projects.wojtekmaj.pl/react-calendar/)

<br/>
### `Calendar`
운동 루틴을 기록할 수 있도록 달력 기능을 제공합니다.
### `Find Your Exercise`
본인에게 필요한 운동을 검색하고 소모 칼로리 등을 확인 할 수 있습니다.
### `Calory Calculator`
오늘 먹은 음식과 수행한 운동을 검색해서 칼로리 계산을 수행할 수 있습니다.
### `Find a Partner`
성균관대 주변의 헬스장 정보를 찾거나 같이할 파트너를 찾아볼 수 있습니다.

## 기능

### `Calendar`
운동 루틴을 기록할 수 있도록 달력 기능을 제공합니다.

### `Find Your Exercise`
본인에게 필요한 운동을 검색하고 소모 칼로리 등을 확인 할 수 있습니다.

### `Calory Calculator`
오늘 먹은 음식과 수행한 운동을 검색해서 칼로리 계산을 수행할 수 있습니다.

### `Find a Partner`
성균관대 주변의 헬스장 정보를 찾거나 같이할 파트너를 찾아볼 수 있습니다.

<br/>

## 작성 정보

### 작성자

- [yooooooochan](https://github.com/yooooooochan) - 이유찬 - [yoochan0322@gmail.com](mailto:yoochan0322@gmail.com)
- [tkddn5623](https://github.com/tkddn5623) - 정상우 - [tkddn5623@naver.com](mailto:tkddn5623@naver.com)
- [nicholasbear](https://github.com/nicholasbear) - 김우진 - [nicholasbear@naver.com](mailto:nicholasbear@naver.com)

### 최종 작성일

- 22.12.02(목)
