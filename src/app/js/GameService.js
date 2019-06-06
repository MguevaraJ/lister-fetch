import { FetchService } from "./FetchService";

export class GameService {
  constructor () {
    this.fetchService = new FetchService();
  }

  async deleteGame (id) {
    return await this.fetchService.DELETE(id);
  }

  async insertGame (newGame) {
    return await this.fetchService.POST(newGame);
  }

  async editGame (id, editGame) {
    return await this.fetchService.PUT(id, editGame);
  }
}
