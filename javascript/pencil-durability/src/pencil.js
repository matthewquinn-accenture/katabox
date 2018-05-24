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
          this.paper.writtenText += letter
      } else {
          this.paper.writtenText += ' '
      }
    }
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
    this.durability = 100

    this.pencilLength--
  }

  getDurability() {
    return Math.max(this.durability, 0)
  }

  getPencilLength() {
    return this.pencilLength
  }
}
