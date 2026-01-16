let input = document.getElementById("inputText");

let btn = document.getElementById("addBtn");

let todolist = document.getElementById("ul_list")

let del = document.getElementById("delBtn")

let y = null;


function errorAlert(message) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${message}`,
        // footer: '<a href="#">Why do I have this issue?</a>'
    });
}

function additmes() {


    if (input.value !== y) {
        console.log(input.value);

    }
    if (input.value.trim() === "") {
        // alert("Please enter a task")
        errorAlert("Please enter a task!")
        return
    }
    todolist.innerHTML += `      <li>
                ${input.value}
                <div class="icons">
                    <span><i class="fa-solid fa-trash" onclick="deleteItem(this)"></i></span>
                    <span><i class="fa-solid fa-pen-to-square" onclick="editItem(this)"></i></span>
                </div>
            </li>
            `
    input.value = ""
}


function delAll() {
    if (todolist.children.length == 0) {
        errorAlert("No Task to Delete")
        return
    }

    for (let i = 0; i < todolist.children.length; i++) {
        todolist.children[i].remove()
        i--;
    }
}

function deleteItem(e) {
    e.parentElement.parentElement.parentElement.remove()
}

function editItem(e) {
    let v = e.parentElement.parentElement.parentElement.firstChild.textContent.trim();
    input.value = v
    y = v
e.parentElement.parentElement.parentElement.remove()

}

btn.addEventListener("click", additmes)

del.addEventListener("click", delAll)