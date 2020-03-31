export default class PostService {
  _apiUrl = 'http://jsonplaceholder.typicode.com';

  async getResurce(url) {
    const res = await fetch(`${this._apiUrl}${url}`);
    if (!res.ok) {
      throw new Error(`ERRROR!!!!!!!!!!! ${url}, with ${res.status}`)
    }
    const body = await res.json();
    return body;
  }

  getAllPosts = async () => {
    const res = await this.getResurce('/posts?_start=3&_limit=5');
    return res.results;
  }

}