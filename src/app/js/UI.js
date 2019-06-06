import { format } from 'timeago.js';
import { GameService } from './GameService';
import { FetchService } from "./FetchService";

const tableList = document.getElementById("tableList");
const gameForm = document.getElementById('gameForm');

tableList.addEventListener('click', toDelete);
tableList.addEventListener('click', toEdit);
gameForm.addEventListener('submit', toSubmit);

const serviceGame = new GameService();
const serviceFetch = new FetchService();

export async function drawList () {
  const response = await serviceFetch.GET('/api/games');
  tableList.innerHTML = ' ';
  response.forEach(game => {
    const { vg_ID, vgName, vgCompany, vgYear, vgGender, vgCreateAt } = game;
    const tr = document.createElement("tr");
    tr.setAttribute("id", vg_ID);
    tr.innerHTML = `
              <td content="ID">${vg_ID}</td>
              <td class="hov" content="name">${vgName}</td>
              <td class="hov" content="company">${vgCompany}</td>
              <td class="hov" content="year">${vgYear}</td>
              <td class="hov" content="gender">${vgGender}</td>
              <td content="create">${format(vgCreateAt)}</td>
              <td>
                <button type="submit" id="btnEdit" class="btn btn-info">O</button>
                <button id="btnDelete" class="btn btn-danger">&times;</button>
              </td>`;

    tableList.appendChild(tr);
  });
}

async function toDelete (e) {
  const child = e.target.getAttribute("id");
  const id = e.target.parentElement.parentElement.getAttribute('id');

  if (child === "btnDelete") {
    if (await serviceGame.deleteGame(id)) await drawList();
  }
}

function toEdit (e) {
  const child = e.target.getAttribute("id");

  if(child === "btnEdit") {
    const id = e.target.parentElement.parentElement.getAttribute("id");

    const nameTr = e.target.parentElement.parentElement.cells[1].innerHTML;
    const companyTr = e.target.parentElement.parentElement.cells[2].innerHTML;
    const yearTr = e.target.parentElement.parentElement.cells[3].innerHTML;
    const genderTr = e.target.parentElement.parentElement.cells[4].innerHTML;

    const name = gameForm.children[0].children[0].children[0].children[1].children[0];
    const company = gameForm.children[0].children[0].children[0].children[2].children[0];
    const year = gameForm.children[0].children[0].children[0].children[3].children[0];
    const gender = gameForm.children[0].children[0].children[0].children[4].children[0];
    const button = gameForm.children[0].children[0].children[0].children[5].children[0];

    name.value = nameTr;
    company.value = companyTr;
    year.value = yearTr;
    gender.value = genderTr;

    button.innerText = "Edit Game";
    button.classList.remove("btn-light");
    button.classList.add("btn-primary");
    gameForm.setAttribute("mode", "edit");
    gameForm.setAttribute("editID", id);
  }
}
async function toSubmit (e) {
  e.preventDefault();
  const child = e.target.getAttribute("id");

    const formData = new FormData(gameForm);
    const button = gameForm.children[0].children[0].children[0].children[5].children[0];
    const id = gameForm.getAttribute("editID");
    const mode = gameForm.getAttribute("mode");

    const newGame = {
      "vgName": formData.get("vgName"),
      "vgCompany": formData.get("vgCompany"),
      "vgYear": formData.get("vgYear"),
      "vgGender": formData.get("vgGender")
    };
    gameForm.reset();

    if (mode === "create")
      if (await serviceGame.insertGame(newGame)) await drawList();

    if(mode === "edit") {
        if (await serviceGame.editGame(id, newGame)) await drawList();
        button.innerText = "Add Game";
        button.classList.remove("btn-primary");
        button.classList.add("btn-light");
        gameForm.setAttribute("mode", "create");
      }
}
