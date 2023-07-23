import { AppState } from "../AppState.js"
import { postsService } from "./PostsService.js"
import { profilesService } from "./ProfilesService.js"

class SearchService {
  constructor() {
    this.searchTypes = ['Posts & People', 'Posts', 'People']
    AppState.searchType.key = this.searchTypes.shift()
  }

  getSearchType() {
    return AppState.searchType.key
  }

  nextSearchType() {
    this.searchTypes.push(AppState.searchType.key)
    AppState.searchType.key = this.searchTypes.shift()
  }

  getSearchString() {
    return AppState.searchString.key
  }

  clearSearchString() {
    AppState.searchString.key = ''
  }

  setSearchString(searchString) {
    AppState.searchString.key = searchString
  }

  async searchPeople(searchString) {
    await profilesService.search(searchString)
  }

  async searchPosts(searchString) {
    await postsService.search(searchString)
  }
}

export const searchService = new SearchService()