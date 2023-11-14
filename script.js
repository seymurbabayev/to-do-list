let inpEl = document.querySelector('#inpEl')
let addBtn = document.querySelector('#addBtn')
let closeBtn = document.querySelector('.btn-close_modifier')
let listTodo = document.querySelector('#listTodo') 

let arr = [];


addBtn.addEventListener('click', function(){

    if(inpEl.value != '') {
        listTodo.innerHTML += `<li class="list-group-item">${inpEl.value}<button type="button" class="btn-close btn-close_modifier" aria-label="Close"></button></li>` 
        inpEl.value = ''
    } else {
        alert('You cannot add an empty line, please type something in')
    }
})




