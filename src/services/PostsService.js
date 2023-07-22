import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import { logger } from "../utils/Logger.js";
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

  async toggleLike(postId) {
    const res = await api.post(`api/posts/${postId}/like`)
    const updatedPost = new Post(res.data)
    const postIndex = AppState.posts.findIndex(post => post.id == postId)
    AppState.posts.splice(postIndex, 1, updatedPost)
  }

  resetPostsPages() {
    AppState.postsCurrentPage = 1
    AppState.postsTotalPages = null
  }
}

export const postsService = new PostsService()