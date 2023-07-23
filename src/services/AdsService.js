import { AppState } from "../AppState.js"
import { Ad } from "../models/Ad.js"
import { api } from "./AxiosService.js"

class AdsService {
  async getAds(count = 10) {
    const res = await api.get(`api/ads?count=${count}`)
    AppState.ads = res.data.map(data => new Ad(data))
  }
}

export const adsService = new AdsService()