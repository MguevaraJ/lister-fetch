const buttonSubmit = document.getElementById("btn_submit");
const insertForm = document.getElementById("formElement");

require("babel-polyfill");

import { drawList } from "./drawList.js";
import { editGames } from "./editGames.js";
import { insertGame } from "./insertGames.js";
import "../css/master.css";
import "../css/bs/bootstrap.min.css";

buttonSubmit.addEventListener("click", submitForm);
window.addEventListener("load", drawList);

function submitForm(e) {
    e.preventDefault();

    let form_data = new FormData(insertForm);

    let newGame = {
        "vg_name": form_data.get("name"),
        "vg_company": form_data.get("company"),
        "vg_year": form_data.get("year"),
        "vg_gender": form_data.get("gender")
    };

    insertForm.reset();
    insertGame(newGame);
}