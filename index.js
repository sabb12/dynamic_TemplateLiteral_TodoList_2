const input = document.querySelector(".input");

let newArray = [];

function listToHtml(list) {
  return list.map((item) => todoListHTML(item)).join("");
}

function todoListHTML(todo) {
  return `<div class="todoContainer" data-id="${todo.id}" >
            <div class="todoSection1">
              <input type="checkbox" class="checkbox" ${todo.checked ? "checked" : "" }/>
            </div>
            <div class="todoSection2">
              <input type="text" value="${todo.content}" class="todo" disabled/>
              ${todo.checked ? "" : '<button class="updateButton">수정</button>'}
              <button type="button" class="deleteButton">삭제</button>
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
      .querySelector(".todoContent")
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
  const id = Number(e.target.parentElement.dataset.id);

  // 배열에서만 지워지고 있다
  newArray = newArray.filter((item) => item.id !== id);
  // DOM에서 지운다
  e.target.parentElement.parentElement.remove();
});

document.addEventListener("click", function checkBox(e) {
  if (!e.target.classList.contains("checkbox")) return;
  const todoContainer = e.target.closest(".todoContainer");
  const id = Number(todoContainer.dataset.id);
  const todoItem = newArray.find((item) => item.id === id);
  todoItem.checked = e.target.checked;

  // Move item between To Do and Done lists
  todoContainer.remove();
  const targetContainer = todoItem.checked ? ".doneContent" : ".todoContent";
  document.querySelector(targetContainer).insertAdjacentHTML(
    "beforeend",
    todoListHTML(todoItem)
  );
});

document.addEventListener("click", function updateButton(e) {
  if (!e.target.classList.contains("updateButton")) return;
  
  const todoContainer = e.target.closest(".todoContainer");
  const todoContent = todoContainer.querySelector(".todo");
  const todoItem = newArray.find((item) => item.id === Number(todoContainer.dataset.id));

  if (e.target.textContent === "수정") {
    todoContent.disabled = false; 
    // todoContent.style.outline = "2px solid black"; 
    todoContent.focus();
    e.target.textContent = "저장";
  } else {
    todoContent.disabled = true; 
    todoContent.style.outline = "none";
    todoItem.content = todoContent.value;
    e.target.textContent = "수정";
  }
});
