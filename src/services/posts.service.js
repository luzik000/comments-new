export default class PostService {
  // _apiUrl = 'http://jsonplaceholder.typicode.com';
  _apiUrl = 'http://localhost:3001';

  async getResurce(url) {
    const res = await fetch(`${this._apiUrl}${url}`);
    if (!res.ok) {
      throw new Error(`ERRROR!!!!!!!!!!! ${url}, with ${res.status}`)
    }
    const body = await res.json();
    return body;
  }

  getAllPosts = async () => {
    const res = await this.getResurce('/posts');
    return res;
  }

  getCommentsByPostId = async (postId) => {
    const res = await this.getResurce(`/posts/${postId}/comments`);
    return res;
  }

  getPostById = async (postId) => {
    const res = await this.getResurce(`/posts/${postId}`);
    return res;
  }

}