import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class PostsService {
  async getPosts() {
    const res = await api.get('api/posts')
    AppState.postsCurrentPage = res.data.page
    AppState.postsTotalPages = res.data.totalPages
    AppState.posts = res.data.posts.map(data => new Post(data))
  }

  async getPostsByProfileId(profileId) {
    const res = await api.get(`api/profiles/${profileId}/posts`)
    AppState.postsCurrentPage = res.data.page
    AppState.postsTotalPages = res.data.totalPages
    AppState.posts = res.data.posts.map(data => new Post(data))
  }
}

export const postsService = new PostsService()