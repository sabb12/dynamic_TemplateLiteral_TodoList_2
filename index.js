const input = document.querySelector(".inputValue");

let newArray = [];

function listToHtml(list) {
  return list.map((item) => todoListHTML(item)).join("");
}

function todoListHTML(todo) {
  return `<div class="todoContainer" data-id="${todo.id}" >
            <div class="todoSection1">
              <input type="checkbox" class="checkboxValue" ${
                todo.checked ? "checked" : ""
              }/>
              <input type="text" class="todoContent" value="${
                todo.content
              }" readonly/>
            </div>
            <div class="todoSection2">
              ${
                todo.checked ? "" : '<button class="updateButton">수정</button>'
              }
              <button class="deleteButton">삭제</button>
            </div>
          </div>`;
}

// todo 추가
function todoItem() {
  if (input.value.trim()) {
    newArray.push({
      id: Date.now(),
      content: input.value,
      checked: false,
    });

    document
      .querySelector(".todoInnerHTML")
      .insertAdjacentHTML(
        "beforeend",
        todoListHTML(newArray[newArray.length - 1])
      );

    input.value = "";
  }
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    todoItem();
  }
});

document.getElementById("addBtn").addEventListener("click", todoItem);

// 삭제
document.addEventListener("click", function deleteButton(e) {
  if (!e.target.classList.contains("deleteButton")) return;
  const todoContainer = e.target.closest(".todoContainer");
  const id = Number(todoContainer.dataset.id);

  // 배열에서만 지워지고 있다
  newArray = newArray.filter((item) => item.id !== id);
  // DOM에서 지운다
  todoContainer.remove();
});

// 체크박스
document.addEventListener("click", function checkBox(e) {
  if (!e.target.classList.contains("checkboxValue")) return;
  const todoContainer = e.target.closest(".todoContainer");
  const id = Number(todoContainer.dataset.id);
  const todoItem = newArray.find((item) => item.id === id);
  todoItem.checked = !todoItem.checked;

  todoContainer.remove();

  if (!todoItem.checked) {
    document
      .querySelector(".todoInnerHTML")
      .insertAdjacentHTML("beforeend", todoListHTML(todoItem));
  } else {
    document
      .querySelector(".completedInnerHTML")
      .insertAdjacentHTML("beforeend", todoListHTML(todoItem));
  }
});

// 수정 버튼
document.addEventListener("click", function updateButton(e) {
  if (!e.target.classList.contains("updateButton")) return;
  const todoContainer = e.target.closest(".todoContainer");
  const todoContent = todoContainer.querySelector(".todoContent");

  if (e.target.textContent === "수정") {
    todoContent.removeAttribute("readonly");
    todoContent.style.outline = "2px solid black"; // Add an outline when editing
    todoContent.focus();
    e.target.textContent = "저장";
  } else {
    todoContent.setAttribute("readonly", true);
    todoContent.style.outline = "none"; // Remove the outline when done editing
    const id = Number(todoContainer.dataset.id);
    const todoItem = newArray.find((item) => item.id === id);
    todoItem.content = todoContent.value;
    e.target.textContent = "수정";
  }
});
