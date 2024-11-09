## 🧍‍♂️ 팀 소개
|  임학민  |
|---|
| ![image](https://github.com/sesac-this-way-and-that/detalks-back/assets/133750746/fb75dbc1-480f-4e0d-a9b1-211590fed587) |
|  Front-end  |
|HTML, CSS, JavaScript|
|<a href="https://github.com/sabb12">🔗GitHub</a>|
<br/>

## Project Introduction(프로젝트 소개)
##### Dynamic HTML Generation with ES6 Template Literals(ES6 템플릿 리터럴을 이용한 동적 HTML 생성)로 만든 Todo List
<br/>

## What I've learned(배운 점)
#### 템플릿 리터럴을 이용한 동적 HTML생성 방법은 "동적으로 추가된 요소들": 
##### 1. HTML(index.html)파일에 작정한 요소들은 패이지가 처음 로드될 때, 이미 DOM에 존재하고, JavaScript로 이벤트 리스너를 각 요소에 붇일 수 있음.
##### 2. 하지만 페이지가 로드된 후에 새로운 요소(예: 사용자가 입력해서 추가한 할 일 항목)들이 DOM에 추가될 때, 그 요소들에는 이벤트 리스너가 자동으로 적용 안됨
##### 3. 즉, 페이지 로딩 시점에 이미 존재했던 버튼이 아니기 때문에, JavaScript에서 그 버튼에 이벤트 리스너를 미리 붙일 수 없음.
##### 4. [해결 방법]: Event Delegation(이벤트 위임)을 해야 한다
##### - DOM전체에다가 부모 요소에 이벤트 리스너를 추가하고, 클릭된 자식 요소를 e.target으로 확인하는 방식임. 이렇게 하면, 동적으로 생성된 요소들도 이벤트를 처리할 수 있게 됨.
```Javascript
document.addEventListener("click", function (e) {
  // 클릭된 요소가 deleteButton이면
  if (!e.target.classList.contains("deleteButton")) return;
  
  // deleteButton 클릭 시 실행되는 로직
  console.log("삭제 버튼 클릭됨");
});
```
<br/>

## Key Feature(주요 기능)
### 1. 할 일 추가 기능
##### 사용자가 입력창(.input)에 텍스트를 입력하고 Enter 키를 누르거나, addBtn 버튼을 클릭하면 새로운 할 일(todo) 항목이 추가됨.
##### handleCreateTodo() 함수는 새로운 할 일을 newTodo에 추가하고, HTML 요소로 변환한 후 DOM에 추가함.
<br/>

### 2. 할 일 삭제 기능
##### 각 할 일에는 삭제 버튼이 포함되어 있으며, 사용자가 이 버튼을 클릭하면 해당 항목이 newArray 배열에서 제거되고 DOM에서도 삭제됨.
##### 이벤트 위임을 사용하여 deleteButton 클래스를 가진 요소를 클릭했을 때 삭제 기능을 수행함.
<br/>

### 3. 완료 체크박스 기능
##### 사용자가 체크박스를 클릭하면 할 일의 checked 상태가 업데이트되며, 해당 항목이 "To Do" 목록에서 "Done" 목록으로 이동합니다(또는 반대로 이동).
<br/>

### 4. 할 일 수정 기능
##### - 새로운 ToDo 항목 추가 시 input은 disabled=false로 시작합니다.
##### - 수정 버튼 클릭 시 버튼이 "저장"으로 바뀌고, input은 disabled=true로 변경됩니다.
##### - 저장 후 버튼이 "수정"으로 돌아가고, input은 다시 disabled=false로 돌아갑니다.
<br/>

## Stacks(사용 스택)
### - Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
<br/>

### - Development
- Languages
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
<br/>

## Project View(화면 구성)


## Project Structure(프로젝트 구조)
```markdown
todoList
├── index.css
├── index.html
├── index.js
```

