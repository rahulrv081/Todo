//console.log("running fine");

let todoList = [];

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let todoItem = inputElement.value;
    console.log(todoItem);

    todoList.push(todoItem);
    inputElement.value = " ";
}

