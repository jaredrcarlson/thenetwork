import { AppState } from "../AppState.js"
import { Ad } from "../models/Ad.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class AdsService {
  async getAds() {
    logger.log('getting ads')
    const res = await api.get('api/ads')
    logger.log('got ads', res.data)
    AppState.ads = res.data.map(data => new Ad(data))
  }
}

export const adsService = new AdsService()