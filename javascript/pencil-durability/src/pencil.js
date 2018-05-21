let writtenText = ''

export class Pencil {
  constructor(durability = 100) {
    this.durability = durability
  }

  write(text) {

  for (let letter of text) {
    if (/[A-Z]/.test(letter)) {
      this.durability -= 2
    } else {
      this.durability--
    }
}

    writtenText += text
  }

  getDurability() {
    return this.durability
  }

}

export const getText = () => {
  return writtenText
}
