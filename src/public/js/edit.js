let tableList = document.getElementById("table-list");
let rows = document.getElementById("rows");
let button_edit = "";
let list_object = tableList.firstElementChild.children;
let list_array = Array.prototype.slice.call(list_object,0);
let index = 0;
let obj_clicked = "";

for (let i = 0; i < list_object.length; i++) {
    list_object[i].addEventListener("dblclick", clic_edit);
}

function clic_edit() {
    
    obj_clicked = this;
    let rows_holder = rows.children;
    index = list_array.indexOf(obj_clicked);

    obj_clicked.innerHTML = `
    <form action="../js/edit.js" id="form_edit">
    <input type="text" value="${ obj_clicked.innerHTML}" placeholder="${ rows_holder[index].innerHTML }"></input>
    <button class = "btn btn-light" id="button_edit">Accept</button>
    </form>
    `
    obj_clicked.removeEventListener("dblclick", clic_edit);
    button_edit = document.getElementById("button_edit");
    button_edit.addEventListener("click", edit);
}

function edit(e) {
    e.preventDefault();
    list_object[index].addEventListener("dblclick", clic_edit);
}