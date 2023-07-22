import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},

  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Account.js').Account} */
  accountTemp: null,

  /** @type {import('./models/Ad.js').Ad[]} */
  ads: [],


  /** @type {import('./models/Post.js').Post[]} */
  posts: [],
  postsCurrentPage: 1,
  postsTotalPages: null,

  /** @type {import('./models/Profile.js').Profile | null} */
  activeProfile: null,

})
