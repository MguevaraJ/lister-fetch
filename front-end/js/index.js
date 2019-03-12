const buttonSubmit = document.getElementById("btn_submit");
const insertForm = document.getElementById("formElement");

import { GameService } from "./GameService";
import "../css/master.css";
import "../css/bootstrap.min.css";

const gameService = new GameService();

buttonSubmit.addEventListener("click", submitForm);
window.addEventListener("DOMContentLoaded", () => gameService.drawList());

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
    gameService.insertGame(newGame);
}