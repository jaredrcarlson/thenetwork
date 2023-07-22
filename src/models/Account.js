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
    this.githubShort = data.github.replace('https://github.com/', '')
    this.linkedin = data.linkedin
    this.linkedinShort = data.linkedin.replace('https://www.linkedin.com/', '')
    this.resume = data.resume
    this.resumeShort = 'Resume'
    this.class = data.class
    this.graduated = data.graduated
  }
}