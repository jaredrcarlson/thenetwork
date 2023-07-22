export class Account {
  constructor(data) {
    this.id = data.id
    this.subs = data.subs
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.github = data.github
    this.linkedin = data.linkedin
    this.resume = data.resume
    this.class = data.class
    this.graduated = data.graduated
  }

  get githubShort() {
    return this.github.replace('https://github.com/', '')
  }

  get linkedinShort() {
    return this.linkedin.replace('https://www.linkedin.com/', '')
  }

  get resumeShort() {
    return 'Resume'
  }
}