const input = document.querySelector(".inputValue");

// const todoList = [
//   { id: Math.ceil(Math.random() * 10), content: "", completed: false },
// ];
let newArray = [];

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
    checked: false,
  });
  // const uncompletedItems = newArray.filter((item) => !item.completed);
  document
    .querySelector(".bodyInnerHTML")
    .insertAdjacentHTML(
      "beforeend",
      todoListHTML(newArray[newArray.length - 1])
    );

  input.value = "";
});

document.addEventListener("click", function deleteButton(e) {
  if (!e.target.classList.contains("deleteButton")) return;
  const id = Number(e.target.parentElement.dataset.id);

  // 배열에서만 지워지고 있다
  newArray = newArray.filter((item) => item.id !== id);
  // DOM에서 지운다
  e.target.parentElement.remove();
  // const completedCount = newArray.filter((item) => item.completed);
  // const acompletedCount = newArray.filter((item) => !item.completed);
  // document.querySelector(".bodyInnerHTML").innerHTML =
  //   listToHtml(acompletedCount);
  // document.querySelector(".footerInnerHTML").innerHTML =
  //   listToHtml(completedCount);
});

document.addEventListener("click", function checkBox(e) {
  if (!e.target.classList.contains("checkboxValue")) return;
  const id = Number(e.target.parentElement.dataset.id);
  const todoItem = newArray.find((item) => item.id === id);
  todoItem.checked = !todoItem.checked;
  // if(todoItem.checked) {
  //   todoItem.checked = false
  // } else {
  //   todiItem.checked = true
  // }
  e.target.parentElement.remove();
  // if (!todoItem.checked) {
  //   document
  //     .querySelector(".bodyInnerHTML")
  //     .insertAdjacentHTML("beforeend", todoListHTML(todoItem));
  // } else {
  //   document
  //     .querySelector(".footerInnerHTML")
  //     .insertAdjacentHTML("beforeend", todoListHTML(todoItem));
  // }
  !todoItem.checked
    ? document
        .querySelector(".bodyInnerHTML")
        .insertAdjacentHTML("beforeend", todoListHTML(todoItem))
    : document
        .querySelector(".footerInnerHTML")
        .insertAdjacentHTML("beforeend", todoListHTML(todoItem));

  // const completedCount = newArray.filter((item) => item.completed);
  // const acompletedCount = newArray.filter((item) => !item.completed);

  // document.querySelector(".footerInnerHTML").innerHTML =
  //   listToHtml(completedCount);

  // document.querySelector(".bodyInnerHTML").innerHTML =
  //   listToHtml(acompletedCount);
});
