export class Paper {
  constructor(writtenText = '') {
    this.writtenText = writtenText
  }

  getText() {
    return this.writtenText
  }
}
