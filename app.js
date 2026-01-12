let input = document.getElementById("inputText");

let btn = document.getElementById("addBtn");

let ul = document.getElementById("ul_list")


function errorAlert() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Please enter a task!`,
        // footer: '<a href="#">Why do I have this issue?</a>'
    });
}

function additmes() {

    if (input.value.trim() === "") {
        // alert("Please enter a task")
        errorAlert()
        return
    }
    ul.innerHTML += `      <li>
                ${input.value}
                <div class="icons">
                    <span><i class="fa-solid fa-trash" onclick="deleteItem(this)"></i></span>
                    <span><i class="fa-solid fa-pen-to-square" onclick="editItem(this)"></i></span>
                </div>
            </li>`
    input.value = ""
}

function deleteItem(e) {
    e.parentElement.parentElement.parentElement.remove()
}

function editItem(e) {
    input.value = e.parentElement.parentElement.parentElement.firstChild.textContent.trim();
    e.parentElement.parentElement.parentElement.remove();


}

btn.addEventListener("click", additmes)