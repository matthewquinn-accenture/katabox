export class Pencil {
  constructor(durability = 100, writtenText = '') {
    this.durability = durability
    this.writtenText = writtenText
  }

  write(text) {
    for (let letter of text) {
      if (this.durability > 0) {
          this.pencilDegregation(letter)
          this.writtenText += letter
      } else {
          this.writtenText += ' '
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

  getDurability() {
    return Math.max(this.durability, 0)
  }

  getText() {
    return this.writtenText
  }

}
