let writtenText = ''

export class Pencil {
  constructor(durability = 100) {
    this.durability = durability
  }

  write(text) {
    this.pencilDegregation(text)

    writtenText += text
  }

  pencilDegregation(text) {
    for (let letter of text) {

      if(this.isNewlineOrSpace(letter)) {
        this.durability = this.durability
      } else if (this.isUppercaseLetter(letter)) {
        this.durability -= 2
      } else {
        this.durability--
      }

    }
  }

  isNewlineOrSpace(letter) {
    return letter == "\n" || letter == " "
  }

  isUppercaseLetter(letter) {
    return /[A-Z]/.test(letter)
  }

  getDurability() {
    return this.durability
  }

}

export const getText = () => {
  return writtenText
}
