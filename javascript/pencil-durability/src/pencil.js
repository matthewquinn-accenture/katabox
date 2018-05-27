export class Pencil {
  constructor(paper, durability = 100, pencilLength = 10) {
    this.paper = paper
    this.durability = durability
    this.pencilLength = pencilLength
  }

  write(text) {
    for (let letter of text) {
      if (this.durability > 0) {
          this.pencilDegregation(letter)
          this.addText(letter)
      } else {
          this.addText(' ')
      }
    }
  }

  addText(text) {
    this.paper.writtenText += text
  }

  pencilDegregation(letter) {
    if (this.isNewlineOrSpace(letter)) {
        this.durability = this.durability
    } else if (this.isUppercaseLetter(letter)) {
        this.durability -= 2
    } else {
        this.durability--
    }
  }

  isNewlineOrSpace(letter) {
    return letter == "\n" || letter == " "
  }

  isUppercaseLetter(letter) {
    return /[A-Z]/.test(letter)
  }

  sharpen() {
    if (this.pencilLength > 0) {
      this.shortenPencilLength()
      this.restoreDurability()
    }
  }

  shortenPencilLength() {
    this.pencilLength--
  }

  restoreDurability() {
     this.durability = 100
  }

  erase(text) {
    let currentWrittenText = this.paper.writtenText
    let textIndex = currentWrittenText.lastIndexOf(text)
    let blanks = ' '.repeat(text.length)
    let textIndexEnd = textIndex + text.length

    this.paper.writtenText = currentWrittenText.substring(0, textIndex) + blanks + currentWrittenText.substring(textIndexEnd)
  }

  getDurability() {
    return Math.max(this.durability, 0)
  }

  getPencilLength() {
    return Math.max(this.pencilLength, 0)
  }
}
