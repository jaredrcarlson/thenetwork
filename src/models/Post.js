export class Post {
  constructor(data) {
    this.id = data.id
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.likeIds = data.likeIds
    this.likes = data.likes
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
  }

  get numLikes() {
    return this.likes.length
  }
}