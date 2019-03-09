const button_sbt = document.getElementById("btn_submit");
const formElement = document.getElementById("formElement");
const tableList = document.getElementById("table-list");
const bDelete = document.getElementsByClassName("b-delete");

button_sbt.addEventListener("click", post);

function post(e) {
    e.preventDefault();

    let form_data = new FormData(formElement);

    let newGame = {
        "vg_name": form_data.get("name"),
        "vg_company": form_data.get("company"),
        "vg_year": form_data.get("year"),
        "vg_gender": form_data.get("gender")
    };

    //Clear text field
    const elements = document.querySelectorAll("input[type='text']");
    for (let e of elements) e.value = "";

    fetch_req(newGame);
}

async function fetch_req(newGame) {

    let url = "/api/games/insert";

    let dataFetch = {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(newGame)
    };

    let data = await fetch(url, dataFetch);
    form();
}

window.addEventListener("load", form);

async function form() {
    const url = "/api/games";
    const data = await fetch(url);
    let games = data.json();
    await games.then(data => {
        tableList.innerHTML = " ";
        for (let i of data) {
            tableList.innerHTML += `
            <tr id="${i.vg_ID}">
                <td>${i.vg_ID}</td>
                <td>${i.vg_name}</td>
                <td>${i.vg_company}</td>
                <td>${i.vg_year}</td>
                <td>${i.vg_gender}</td>
                <td>${i.vg_create}</td>
                <td><button class="b-delete">X</button></td>
            <tr>`  
        }
    });
    for(let i of bDelete) {
        i.addEventListener("click", async e => {
            const td = e.target.parentElement.parentElement;
            const id = td.getAttribute("id");
            const url = "/api/games/delete/" + id;
            await fetch(url);
            form();
        });
    }
}