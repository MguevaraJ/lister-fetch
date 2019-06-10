export class FetchService {
  async GET (url) {
    const data = await fetch(url);
    return await data.json();
  }

  async POST (body) {
    try {
      const url = '/api/games/insert';
      const fetchConfig = {
        'method': 'POST',
        'headers': { 'Content-Type': 'application/json' },
        'body': JSON.stringify(body)
      };
      await fetch(url, fetchConfig);
      return true;
    } catch (err) {
      return false;
    }
  }

  async DELETE (id) {
    try {
      const url = '/api/games/delete/' + id;
      await fetch(url, { 'method': 'DELETE' });
      return true;
    } catch (err) {
      return false;
    }
  }

  async PUT (id, body) {
    try {
      const url = '/api/games/update/' + id;
      const fetchConfig = {
        'method': 'PUT',
        'headers': { 'Content-Type': 'application/json' },
        'body': JSON.stringify(body)
      };
      await fetch(url, fetchConfig);
      return true;
    } catch (err) {
      return false;
    }
  }
}
