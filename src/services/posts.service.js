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

  async postResurce(url, data) {
    const res = await fetch(`${this._apiUrl}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      throw new Error(`ERRROR!!!!!!!!!!! ${url}, with ${res.status}`)
    }
    const body = await res.json();
    return body;
  }

  
  postNewComment = async (data) => {
    const res = await this.postResurce('/comments', data);
    return res;
  }


  async updateResurce(url, data) {
    const res = await fetch(`${this._apiUrl}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(
      response => response.json()
    )
    .then(data=> console.log(data))
    .catch(err => console.log(err));
  /*   if (!res.ok) {
      throw new Error(`ERRROR!!!!!!!!!!! ${url}, with ${res.status}`)
    }
    const body = await res.json();
    console.log(body);
    return body; */
  }


  updateCurrentComment = async ( id, data ) => {
    await this.updateResurce(`/comments/${id}`, data);
  }
}