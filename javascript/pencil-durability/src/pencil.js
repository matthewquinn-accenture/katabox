let writtenText = ''

export class Pencil {
  constructor(durability = 100) {
    this.durability = durability
  }

  write(text) {
    this.durability -= text.length

    writtenText += text
  }

  getDurability() {
    return this.durability
  }

}

export const getText = () => {
  return writtenText
}
