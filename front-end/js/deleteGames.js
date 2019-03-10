import { drawList } from "./drawList";
// import { FetchServices } from "./fetchServices";

// const fetchServices = new FetchServices();

export async function deleteGame(e) {
    const td = e.target.parentElement.parentElement;
    const id = td.getAttribute("id");
    // const response = await fetchServices.req("/api/games/delete/" + id);
    drawList();
}