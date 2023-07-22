import { ref } from 'vue'
import { AppState } from '../AppState'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
      AppState.accountTemp = { ...AppState.account }
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async updateAccount() {
    const res = await api.put('/account', AppState.account)
    AppState.account = new Account(res.data)
    AppState.accountTemp = { ...AppState.account }
  }

  restoreAccount() {
    AppState.account = { ...AppState.accountTemp }
  }
}

export const accountService = new AccountService()
