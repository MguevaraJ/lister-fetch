// let tableList = document.getElementById("table-list");
// let rows = document.getElementById("rows");
// let list_object = tableList.childNodes;  //Seacrh correctly child elements
// console.log(list_object);
// let list_array = Array.prototype.slice.call(list_object, 0);
// let index, obj_clicked, form_data, button_edit, form_edit, to, ID;

// function addListener() {
//     for (let i = 1; i < list_object.length; i++) {
//         list_object[i].addEventListener("dblclick", clic_edit);
//     }
// }
// addListener();

// function removeListener() {
//     for (let i = 0; i < list_object.length; i++) {
//         list_object[i].removeEventListener("dblclick", clic_edit);
//     }
// }

// function clic_edit() {

//     obj_clicked = this;
//     let rows_holder = rows.children;
//     index = list_array.indexOf(obj_clicked);

//     to = "vg_" + (rows_holder[index].innerHTML);
//     ID = obj_clicked.parentElement.cells[0];
//     console.log(ID);

//     obj_clicked.innerHTML = `
//     <form action="../js/edit.js" id="form_edit">
//     <input type="text" value="${ obj_clicked.innerHTML}" 
//     placeholder="${ rows_holder[index].innerHTML}" name="${to}"></input>
//     <button class = "btn btn-light" id="button_edit">Accept</button>
//     </form>
//     `
//     button_edit = document.getElementById("button_edit");
//     form_edit = document.getElementById("form_edit");
//     button_edit.addEventListener("click", confirm_edit);

//     removeListener();
// }

// async function confirm_edit(e) {
    // e.preventDefault();
    // addListener();
    // form_data = new FormData(form_edit);
    // let gived = form_data.get(to);
    // let content = { gived };
    // obj_clicked.innerHTML = gived;
// }

import { drawList } from "./drawList";
// import { FetchServices } from "./fetchServices";

// const fetchServices = new FetchServices();

export async function editGames() {

    const newVideogame = {
        "vg_name": "New Super Mario Bros WiiU",
        "vg_company": "Nintendo",
        "vg_year": "2006",
        "vg_gender": "Platform",
    }

    // let response = await fetchServices.req("/api/games/update/17","POST","application/json",
    // newVideogame);
    drawList();
}