let todoInput = document.querySelector('.todo-input');
let todoButton = document.querySelector('.todo-button');
let todoList = document.querySelector('.todo-list');
let themeBtn = document.getElementById('theme');
let bd = document.getElementsByTagName('body');

document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
// themeBtn.addEventListener('click',function(){
//     bd[0].classList.toggle('blk');
    
// })

function addTodo(event){
        event.preventDefault();
        console.log('y u do dis');
        if(todoInput.value!=''){
        let todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        
        let newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        
       
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);


    

        let completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="bi bi-check-lg"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

        let trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="bi bi-trash-fill"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);

        saveToLocal(todoInput.value);
        todoInput.value = '';
        }
}
      
function deleteCheck(e){
    let item = e.target;

    if(item.classList[0]=='trash-btn'){
        let todo = item.parentElement;
        todo.classList.add('fall');
        removeTodos(todo);
        todo.addEventListener('transitionend' ,function(){
            todo.remove();
        })
    }

    if(item.classList[0]=='complete-btn'){
        let todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
     
function saveToLocal(){
    console.log('to me');
    let Todos;
    if(localStorage.getItem("Todos")===null){
        Todos = [];
    }
    else{
        Todos = JSON.parse(localStorage.getItem("Todos"));
    }

    Todos.push(todoInput.value);

    console.log('y');
    localStorage.setItem("Todos", JSON.stringify(Todos));
}

function getTodos(){
    
    let Todos;
    if(localStorage.getItem("Todos")===null){
        Todos = [];
    }
    else{
        Todos = JSON.parse(localStorage.getItem("Todos"));
    }
   
  Todos.forEach(function(todo){
    let todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        
        let newTodo = document.createElement('li');
        newTodo.innerText = todo;
        
       
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);


        // saveToLocal(todoInput.value);


        let completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="bi bi-check-lg"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

        let trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="bi bi-trash-fill"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);
  });
    
}

 function removeTodos(todo){
    let Todos;
    if(localStorage.getItem("Todos")===null){
        Todos = [];
    }
    else{
        Todos = JSON.parse(localStorage.getItem("Todos"));
    }

    console.log(todo.children[0].innerText);
    let item = todo.children[0].innerText;
    Todos.splice(Todos.indexOf(item),1);
    localStorage.setItem('Todos',JSON.stringify(Todos));
 }