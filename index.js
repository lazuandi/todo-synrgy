let inputTodo = document.createElement("input");
let inputButton = document.createElement("button");
let card = document.createElement("div");
let inputTitle = document.createElement("h2");
let container = document.createElement("div");
let itemList = document.createElement("div");


inputTitle.textContent = "Create To Do:";
inputTodo.className = "inputTodo";
inputButton.className = "addButton";
inputButton.textContent = "Add";
itemList.className = "itemList";
container.className = "container";
card.className = "card";
inputTitle.className = "title full-width";


let itemEdit = "";
inputButton.addEventListener("click", ()=>{
  if (inputTodo.classList.contains("edit")) {
    if (inputTodo.value === "") {
      itemList.querySelector("#"+itemEdit).remove();
    } else {
      let item = itemList.querySelector("#" + itemEdit).children;
      item[0].textContent = inputTodo.value;
    }
    inputTodo.value = "";
    inputTodo.classList.remove("edit");
    inputTitle.textContent = "New Todo:";
    inputButton.textContent = "Add";
  } else {
    if(inputTodo.value !== "") {
      let itemCount = itemList.childNodes.length;
      let itemTitle = document.createElement("h2");
      let removeButton = document.createElement("button");
      let editButton = document.createElement("button");
      let itemTodo = document.createElement("div");
      itemTodo.className = "itemTodo";
      itemTodo.id = "item" + (itemCount+1);
      editButton.className = "editButton bi bi-pencil";
      removeButton.className = "removeButton bi bi-trash";
      itemTitle.className = "title";
  
      itemTitle.textContent = inputTodo.value
      removeButton.addEventListener("click", () => {
        removeButton.parentNode.remove();
      });
      editButton.addEventListener("click", (e) => {
        inputTodo.value = itemTitle.textContent
        inputTodo.classList.add("edit");
        inputTitle.textContent = "Edit To Do:";
        inputButton.textContent = "Edit";
        itemEdit = itemTodo.id;
      })
      itemTodo.append(itemTitle,editButton,removeButton)
      itemList.append(itemTodo);
      inputTodo.value = "";
    }
  }
})

container.append(card);
container.append(itemList);
card.append(inputTitle,inputTodo,inputButton);
document.body.append(container);