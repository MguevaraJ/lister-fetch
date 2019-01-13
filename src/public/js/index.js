let button = document.getElementById("btn_submit");
let form = document.getElementById("form_1");

button.addEventListener("click", send);

function send(e) {
    e.preventDefault();
    console.log("Clicked");
}