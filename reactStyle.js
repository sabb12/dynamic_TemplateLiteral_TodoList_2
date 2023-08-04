// 투두리스트를 배열로 받아서 DOM에 렌더링 해주는 함수
// 배열에 추가하고 = newArray.push()
// DOM에서 추가하고 = body.adjacentHTML();

// 배열에서 삭제하고 = newArray = newArray.filter()
// e.target.parentElement.remove() = DOM에서 삭제하고
// 위에 대신하는 함수
// function render(todoList: Todo[]): void {
//   // listToHtml(todoList)
//   // DOM에 렌더링
//   document.querySelector(".bodyInnerHTML").innerHTML = listToHtml(todoList);
// }
const input = document.querySelector(".inputValue");
let newArray = [];

function render(todoList) {
  const uncompleteList = todoList.filter((todo) => !todo.checked);
  document.querySelector(".bodyInnerHTML").innerHTML =
    listToHtml(uncompleteList);
  const completeList = todoList.filter((todo) => todo.checked);
  document.querySelector(".footerInnerHTML").innerHTML =
    listToHtml(completeList);
}

function listToHtml(list) {
  return list.map((item) => todoListHTML(item)).join("");
}

function todoListHTML(todo) {
  return `<div class="bodyWrapper" data-id="${todo.id}" >
                  <input type="checkbox" class="checkboxValue" ${
                    todo.checked ? "checked" : ""
                  }/>
                  <div>${todo.content}</div>
                  <button class="deleteButton">삭제</button>
              </div>`;
}

document.getElementById("addBtn").addEventListener("click", (e) => {
  newArray.push({
    id: Date.now(),
    content: input.value,
    completed: false,
    checked: false,
  });

  render(newArray);

  input.value = "";
});

document.addEventListener("click", function deleteButton(e) {
  if (!e.target.classList.contains("deleteButton")) return;
  const id = Number(e.target.parentElement.dataset.id);

  newArray = newArray.filter((item) => item.id !== id);

  render(newArray);
});

document.addEventListener("click", function checkBox(e) {
  if (!e.target.classList.contains("checkboxValue")) return;
  const id = Number(e.target.parentElement.dataset.id);
  const todoItem = newArray.find((item) => item.id === id);

  todoItem.checked = !todoItem.checked;

  render(newArray);
});
