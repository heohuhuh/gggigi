const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector(".todo-list")
const inputButton = document.querySelector("#enterKey")
const deleteButton = document.querySelector("#deleteButton")
const header = document.querySelector(".section")

inputButton.addEventListener("click",(e)=>{
    todoInput.value != "" ? generateTodo(todoInput.value) : todoInput.value = "";
})

deleteButton.addEventListener("click",(e)=>{
    lengths = todoList.childNodes.length;
    for(let i=1; i<lengths; i++){
        li = document.querySelector("li")
        todoList.removeChild(li)
    }
})

todoInput.addEventListener("keypress",(e)=>{
    if(e.keyCode === 13){
        todoInput.value != "" ? generateTodo(todoInput.value) : todoInput.value = "";
    }
})


//function generateTodo(){}
//const generateTodo = function(){}
const generateTodo = (todo)=>{
    
    const li = document.createElement("li");
    const likeSpan = generateLike();
    li.appendChild(likeSpan);
    const itemSpan = generateItem(todo);
    li.appendChild(itemSpan);
    const manageSpan = generateManage();
    li.appendChild(manageSpan);
    todoList.appendChild(li)
}
const generateLike = () => {
    const span = document.createElement("span")
    span.classList.add("todo-like")
    const icon = generateIcon("favorite_border")
    span.appendChild(icon);
    icon.addEventListener("click", ()=>{
        icon.innerText === 'favorite_border' ? icon.innerText = "favorite" : icon.innerText = "favorite_border"
    })
    return span;
}
const generateItem = (todo) => {
    const span = document.createElement("span");
    span.classList.add("todo-item");
    span.innerText = todo;
    return span;
}
const generateManage = () => {
    const span = document.createElement("span");
    span.classList.add("todo-manage");
    const icon1 = generateIcon("check")
    span.appendChild(icon1);
    const icon2 = generateIcon("clear")
    span.appendChild(icon2)
    icon1.addEventListener("click", (e)=>{
        const li = e.target.parentNode.parentNode;
        li.classList.add('done')
        console.log(li)
    })
    icon2.addEventListener("click", (e)=>{
        const li = e.target.parentNode.parentNode;
        todoList.removeChild(li)
        
    })
    return span;
}

const generateIcon = (name) =>{
    const icon = document.createElement("i")
    icon.classList.add("material-icons")
    icon.classList.add(name)
    icon.innerText = name
    return icon;
}