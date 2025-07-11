let inputTodo = document.querySelector('.input-todo')
let listTodos = document.querySelector('.list-todos')

function enterTodo(e) {
    if (e.key === 'Enter') {
        e.preventDefault()
        let inputValue = inputTodo.value.trim()
        if (inputValue === '') {
            alert('Pleas Enter Text')
        } else {
            let elemLi = '<li class="item-todo d-flex border-bottom border-secondary justify-content-between align-items-center"><div class="d-flex gap-4" ><input class="form-check" type="checkbox"><span class="text-todo">' + inputValue + '</span></div><img class="delete-todo" src="img/trash-delete-white-icon.png" width="20px" height="20px" alt=""></li>'
            listTodos.insertAdjacentHTML('beforeend', elemLi)
            inputTodo.value = ''
            let checkTodo = document.querySelectorAll('.form-check')
            let delTodo = document.querySelectorAll('.delete-todo')


            checkTodo.forEach(function (checkbox) {
                checkbox.addEventListener('change', completTodo)
            })
            delTodo.forEach(function (item) {
                item.addEventListener('click', deletTodo)
            })
        }
    }
}

function completTodo(e) {
    let text = e.target.parentElement.querySelector('.text-todo');
    if (e.target.checked) {
        text.classList.add('checked');
    } else {
        text.classList.remove('checked');
    }
}

function deletTodo(item) {
    let elemTrash = item.target.parentElement
    let todoItem = elemTrash.parentElement
    todoItem.removeChild(elemTrash)
}

inputTodo.addEventListener('keypress', enterTodo)