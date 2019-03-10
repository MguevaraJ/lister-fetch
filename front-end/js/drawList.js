const tableList = document.getElementById("table-list");
const buttonDelete = document.getElementsByClassName("b-delete");

import { format } from "timeago.js";
// import { FetchServices } from "./fetchServices";
import { deleteGame } from "./deleteGames";

// const fetchServices = new FetchServices();

export async function drawList() {
    // let response = await fetchServices.req("/api/games");
    const data = await fetch("/api/games");
    const pending = data.json();
    const response = pending.then(data => data.json());
    console.log(response);
    // tableList.innerHTML = " ";
    // for (let i of response) {
    //     tableList.innerHTML += `
    //     <tr id="${i.vg_ID}">
    //         <td>${i.vg_ID}</td>
    //         <td>${i.vg_name}</td>
    //         <td>${i.vg_company}</td>
    //         <td>${i.vg_year}</td>
    //         <td>${i.vg_gender}</td>
    //         <td>${format(i.vg_create)}</td>
    //         <td><button class="btn btn-danger b-delete">X</button></td>
    //     <tr>`
    // }
    // for (let i of buttonDelete) i.addEventListener("click", deleteGame);
}