let writtenText = ''

export class Pencil {
  constructor(durability = 100) {
    this.durability = durability
  }

  write(text) {

    if (/[A-Z]/.test(text)) {
      this.durability -= text.length * 2
    } else {
      this.durability -= text.length
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
