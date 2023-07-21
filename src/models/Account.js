const props = ['id', 'subs', 'email', 'name', 'picture', 'bio', 'coverImg', 'github', 'linkedin', 'resume', 'class', 'graduated']

export class Account {
  constructor(data) {
    props.forEach(p => this[p] = data[p])
  }
}