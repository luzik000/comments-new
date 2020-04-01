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
    return res;
  }

  getCommentsByPostId = async (postId) => {
    const res = await this.getResurce(`/posts/${postId}/comments`);
    console.log("PostService -> getCommentsByPostId -> res", res)
    return res;
  }

  getPostById = async (postId) => {
    const res = await this.getResurce(`/posts/${postId}`);
    console.log("PostService -> getPostById -> res", res)
    return res;
  }

}