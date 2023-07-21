import { AppState } from "../AppState.js"
import { Ad } from "../models/Ad.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class AdsService {
  async getAds() {
    const res = await api.get('api/ads')
    AppState.ads = res.data.map(data => new Ad(data))
  }
}

export const adsService = new AdsService()