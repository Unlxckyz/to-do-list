const localStorageKey = 'to-do-list'
const removeSound = new Audio('./assets/click.mp3')
const addSound = new Audio('./assets/add.mp3')
const errorSound = new Audio('./assets/error.mp3')
showValues();

function validateNewTask() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.getElementById('input-new-task').value;
    let existe = values.find(x => x.name == inputValue);
    return !existe ? false : true
}
function newTask() {
    let input = document.getElementById('input-new-task');
    if (!input.value) {
        errorSound.play();
        input.style.border = 'red 1px solid'




    }
    else if (validateNewTask()) {
        errorSound.play()
        input.style.border = 'red 1px solid'



    }
    else {
        input.style.border = ''
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push(
            {
                name: input.value
            }
        )
        addSound.play();
        localStorage.setItem(localStorageKey, JSON.stringify(values));
        showValues();

    }
    input.value = '';
}
function showValues() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('to-do-list');
    list.innerHTML = "";
    for (let i = 0; i < values.length; i++) {
        list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok' onclick='removeItem("${values[i]['name']}")'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
      </svg> </button></li>`
    }
}

function removeItem(data) {

    removeSound.play();
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index, 1);
    localStorage.setItem(localStorageKey, JSON.stringify(values));

    showValues();





}
showValues();