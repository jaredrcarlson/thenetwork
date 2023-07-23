import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import { api } from "./AxiosService.js";

class PostsService {
  async getPosts(pageNumber, profileId) {
    let res
    if (profileId) {
      res = await api.get(`api/profiles/${profileId}/posts?page=${pageNumber}`)
    } else {
      res = await api.get(`api/posts?page=${pageNumber}`)
    }
    AppState.postsCurrentPage = res.data.page
    AppState.postsTotalPages = res.data.totalPages
    AppState.posts = res.data.posts.map(data => new Post(data))
  }

  async getSearchPosts(pageNumber, queryString) {
    const res = await api.get(`api/posts?query=${queryString}&page=${pageNumber}`)
    AppState.searchPostsCurrentPage = res.data.page
    AppState.searchPostsTotalPages = res.data.totalPages
    AppState.searchPosts = res.data.posts.map(data => new Post(data))
  }

  async createPost() {
    const res = await api.post('api/posts', AppState.newPost)
    AppState.posts.unshift(new Post(res.data))
  }

  async deletePost(postId) {
    await api.delete(`api/posts/${postId}`)
    const postIndex = AppState.posts.findIndex(post => post.id == postId)
    AppState.posts.splice(postIndex, 1)
  }

  async toggleLike(postId) {
    const res = await api.post(`api/posts/${postId}/like`)
    const updatedPost = new Post(res.data)
    const postIndex = AppState.posts.findIndex(post => post.id == postId)
    AppState.posts.splice(postIndex, 1, updatedPost)
  }

  async search(queryString) {
    const res = await api.get(`/api/posts?query=${queryString}`)
    AppState.searchPosts = res.data.posts.map(data => new Post(data))
    AppState.searchPostsCurrentPage = AppState.searchPosts.length ? res.data.page : 0
    AppState.searchPostsTotalPages = AppState.searchPosts.length ? res.data.totalPages : 0
  }

  clearPosts() {
    AppState.posts = []
    this.resetPostsPages()
  }

  resetPostsPages() {
    AppState.postsCurrentPage = 1
    AppState.postsTotalPages = null
  }

  clearForm() {
    AppState.newPost = {}
  }
}

export const postsService = new PostsService()