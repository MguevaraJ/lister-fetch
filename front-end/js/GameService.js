import { format } from "timeago.js";

export class GameService {

    drawList() {
        fetch("/api/games")
            .then(data => data.json())
            .then(response => {
                this.tableList = document.getElementById("table-list");
                this.tableList.innerHTML = " ";
                response.forEach(game => {
                    this.tableList.innerHTML += `
            <tr id="${game.vg_ID}">
                <td>${game.vg_ID}</td>
                <td>${game.vg_name}</td>
                <td>${game.vg_company}</td>
                <td>${game.vg_year}</td>
                <td>${game.vg_gender}</td>
                <td>${format(game.vg_create)}</td>
                <td><button class="btn btn-danger b-delete">X</button></td>
            <tr>`});
            })
            .then(() => {
                this.buttonDelete = document.getElementsByClassName("b-delete");
                for(let button of this.buttonDelete) button.addEventListener("click", e => this.deleteGame(e));
		
            })
            .catch(err => console.log("DRAWLIST: ",err));
    }

    async deleteGame(e) {
        try {
            const td = e.target.parentElement.parentElement;
            const id = td.getAttribute("id");
            const url = "/api/games/delete/" + id;
            await fetch(url,{"method":"DELETE"});
            this.drawList();
        } catch(err) {
              console.log("deleteGame: ",err); 
          }
    }

    async insertGame(newGame) {
        try {
            const url = "/api/games/insert";
            const fetchConfig = {
                "method": "POST",
                "headers": { "Content-Type": "application/json" },
                "body": JSON.stringify(newGame)
            }
            await fetch(url, fetchConfig);
            this.drawList();
        } catch(err) {
              console.log("insertGame: ",err);
          }
    }

    async editGames(editGame) {
        try {
            const url = "/api/games/update/17";
            const fetchConfig = {
                "method": "POST",
                "headers": { "Content-Type": "application/json" },
                "body": JSON.stringify(editGame)
            }
            await fetch(url, fetchConfig);
            this.drawList();
        } catch(err) {
              console.log("editGame: ",err);
          }
    }
}