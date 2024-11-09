## 🧍‍♂️ 팀 소개
|  임학민  |
|---|
| ![image](https://github.com/sesac-this-way-and-that/detalks-back/assets/133750746/fb75dbc1-480f-4e0d-a9b1-211590fed587) |
|  Front-end  |
|HTML, CSS, JavaScript|
|<a href="https://github.com/sabb12">🔗GitHub</a>|

## Project Introduction(프로젝트 소개)


## Key Feature(주요 기능)
### 1. 할 일 추가 기능
##### 사용자가 입력창(.input)에 텍스트를 입력하고 Enter 키를 누르거나, addBtn 버튼을 클릭하면 새로운 할 일(todo) 항목이 추가됨.
##### handleCreateTodo() 함수는 새로운 할 일을 newTodo에 추가하고, HTML 요소로 변환한 후 DOM에 추가함.

### 2. 할 일 삭제 기능
##### 각 할 일에는 삭제 버튼이 포함되어 있으며, 사용자가 이 버튼을 클릭하면 해당 항목이 newArray 배열에서 제거되고 DOM에서도 삭제됨.
##### 이벤트 위임을 사용하여 deleteButton 클래스를 가진 요소를 클릭했을 때 삭제 기능을 수행함.

### 3. 완료 체크박스 기능
##### 사용자가 체크박스를 클릭하면 할 일의 checked 상태가 업데이트되며, 해당 항목이 "To Do" 목록에서 "Done" 목록으로 이동합니다(또는 반대로 이동).

### 4. 할 일 수정 기능
##### - 새로운 ToDo 항목 추가 시 input은 disabled=false로 시작합니다.
##### - 수정 버튼 클릭 시 버튼이 "저장"으로 바뀌고, input은 disabled=true로 변경됩니다.
##### - 저장 후 버튼이 "수정"으로 돌아가고, input은 다시 disabled=false로 돌아갑니다.

## Stacks(사용 스택)

### - Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)

### - Development
- Languages
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)

## Project View(화면 구성)


## Project Structure(프로젝트 아키텍쳐)

```markdown
todoList
├── index.css
├── index.html
├── index.js
```

