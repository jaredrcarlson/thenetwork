import { AppState } from "../AppState.js"
import { Profile } from "../models/Profile.js"
import { api } from "./AxiosService.js"

class ProfilesService {
  async getProfileById(profileId) {
    const res = await api.get(`api/profiles/${profileId}`)
    AppState.activeProfile = new Profile(res.data)
  }

  async search(queryString) {
    const res = await api.get(`/api/profiles?query=${queryString}`)
    AppState.profiles = res.data.map(data => new Profile(data))
  }

  clearProfiles() {
    AppState.profiles = []
  }
}

export const profilesService = new ProfilesService()