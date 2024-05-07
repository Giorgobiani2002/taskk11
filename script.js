const taskInput = document.getElementById("taskInput");
const taskBtn = document.getElementById("addTask");
taskBtn.addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  let inputValue = taskInput.value.trim();
  if (inputValue !== "") {
    let listItem = document.createElement("li");
    listItem.textContent = inputValue;
    taskList.appendChild(listItem);

    let goodBtn = document.createElement("button");
    let removeBtn = document.createElement("button");
    goodBtn.classList.add("btn3");
    removeBtn.classList.add("btn2");
    removeBtn.addEventListener("click", function () {
      taskList.removeChild(listItem);
    });
    listItem.appendChild(goodBtn);
    listItem.appendChild(removeBtn);
  }
  taskInput.value = "";
});
