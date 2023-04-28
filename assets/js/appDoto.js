let _thing = document.getElementById('thi')
let _price = document.getElementById('pri')
const _list = document.getElementById('list')

let temp = []

let saveLocal = ''

document.addEventListener('DOMContentLoaded', getList)
document.getElementById('btn').addEventListener('click', function () {
  
    _thing.focus()
    if (_thing.value == "" ||
        _thing.value == null) {
        alert("pelase enter your text")
    } else {



        const myData = {
            thing: _thing.value,
            price: _price.value

        }



        console.log(myData);
        //temp.push(myData)
        saveLocalStorage(myData)


        _createLi(myData)


        _thing.value = ""
        _price.value = ""
    }
    //localStorage.setItem(saveLocal, JSON.stringify(temp))
})


_list.addEventListener("click", function (e) {
    console.log(e.target);
    const items = e.target
    if (items.classList[1] === 'bi-trash3') {
        const list = items.parentElement

      
        removeLocal(list)
        list.remove()
    }
    if (items.classList[1] === 'bi-check') {
        let _remove = items.parentElement
        _remove.classList.toggle('checked')
    }
})


function _createLi(event) {
    const _li = document.createElement('li')
    _li.classList.add('border-bottom', 'row', 'py-4')
    _li.innerHTML = `
        <div class="col-5">  ${event.thing}:  ${event.price} </div>
    <i class="bi bi-check bg-success col-2 d-flex justify-content-center align-items-center mx-3 "></i>
    <i class="bi bi-trash3 bg-danger col-2 d-flex justify-content-center align-items-center  mx-3"></i>
    `
    document.getElementById('list').appendChild(_li)
}

function saveLocalStorage(myData) {

    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(myData)
    localStorage.setItem('todos', JSON.stringify(todos))
}

function removeLocal(list) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    const listIndex = list.children[0].innerText
    console.log(listIndex);

    todos.splice(todos.indexOf(listIndex), 1)
    localStorage.setItem('todos', JSON.stringify(todos))


}
function getList() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    console.log(todos);
    todos.forEach(function (todos) {

        const _li = document.createElement('li')
        _li.classList.add('border-bottom', 'row', 'py-4')
        _li.innerHTML = `
            <div class="col-5">  ${todos.thing}:  ${todos.price} </div>
        <i class="bi bi-check bg-success col-2 d-flex justify-content-center align-items-center mx-3 "></i>
        <i class="bi bi-trash3 bg-danger col-2 d-flex justify-content-center align-items-center  mx-3"></i>
        `
        document.getElementById('list').appendChild(_li)
    })


}
