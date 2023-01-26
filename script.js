   // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

   let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    for (let i = 0; i < arrayOfTodos.length; i++) {
        let todoList = document.getElementById('todo-list');

        let todoItem = document.createElement('LI');

        let todoTitle = document.createTextNode(arrayOfTodos[i].title);

        todoItem.appendChild(todoTitle);
        todoList.appendChild(todoItem);
    }
}

const getByUser = () => {

    clearTodos();

    const numInput = document.getElementById('num-input').valueAsNumber

    const filteredArray = arrayOfTodos.filter((arr) => arr.userId === numInput )

    for (let i = 0; i < filteredArray.length; i++) {
        let todoList = document.getElementById('todo-list');

        let todoItem = document.createElement('LI');

        let todoTitle = document.createTextNode("User: " + filteredArray[i].userId + " " + filteredArray[i].title);

        todoItem.appendChild(todoTitle);
        todoList.appendChild(todoItem);
    }
}

const clearTodos = () => {

    const todos = document.getElementsByTagName("OL")

    for (i=0; i < todos.length; i++) {

        console.log(todos[i].id)

        todos[i].innerHTML = null;
    }  
}
  