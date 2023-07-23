import { AppState } from "../AppState.js"
import { postsService } from "./PostsService.js"
import { profilesService } from "./ProfilesService.js"

class SearchService {
  // getSearchType() {
  //   return AppState.searchType.key
  // }

  // nextSearchType() {
  //   AppState.searchTypes.push(AppState.searchType.key)
  //   AppState.searchType.key = AppState.searchTypes.shift()
  // }

  getSearchString() {
    return AppState.searchString.key
  }

  clearSearchString() {
    AppState.searchString.key = ''
  }

  setSearchString(searchString) {
    AppState.searchString.key = searchString
  }

  async search(searchString) {
    // profilesService.clearProfiles()
    // postsService.clearPosts()
    await this.searchPeople(searchString)
    await this.searchPosts(searchString)

    // const searchType = this.getSearchType()
    // if (searchString != '' && searchType.includes('People')) {
    //   profilesService.clearProfiles()
    //   await this.searchPeople(searchString)
    // }
    // if (searchString != '' && searchType.includes('Posts')) {
    //   postsService.clearPosts()
    //   await this.searchPosts(searchString)
    // }
    // this.clearSearchString()
  }

  async searchPeople(searchString) {
    await profilesService.search(searchString)
  }

  async searchPosts(searchString) {
    await postsService.search(searchString)
  }
}

export const searchService = new SearchService()