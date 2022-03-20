// Selectors
const todoInput= document.querySelector('.todo-input');
const todoButton= document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);



//Functions

function addTodo(event){

    //Prevent form from submitting
    event.preventDefault();

    //ToDo Div
    const div = document.createElement("div");
    div.classList.add('todo');
    
    //Create LI
    const li = document.createElement("li");
    li.innerText = todoInput.value
    li.classList.add('todo-item');

    //Create check Button
    const checkTodo = document.createElement("button");
    checkTodo.innerHTML = '<i class="fas fa-check"></i>';
    checkTodo.classList.add('complete-button');

    //Create Trash Button
    const deleteTodo = document.createElement("button");
    deleteTodo.innerHTML = '<i class="fas fa-trash"></i>';
    deleteTodo.classList.add('delete-button');

    //Appending the elements
    div.appendChild(li);
    div.appendChild(checkTodo);
    div.appendChild(deleteTodo);
    //Appending the todo-list with div
    todoList.appendChild(div);

    //Clear Todo input value
    todoInput.value = "";
   

}


function deleteCheck(e){
    const item = e.target;
    //Delete Todo
    if(item.classList[0] === 'delete-button'){
        const todo = item.parentElement;
        todo.remove();
    }

    //Check mark
    if(item.classList[0] === 'complete-button'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}


