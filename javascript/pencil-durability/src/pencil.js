export class Pencil {
  constructor(paper, durability = 100, pencilLength = 10, eraserDurability = 15) {
    this.paper = paper
    this.durability = durability
    this.pencilLength = pencilLength
    this.eraserDurability = eraserDurability
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
    let textIndexEnd = textIndex + text.length

    let textBeforeErase = currentWrittenText.substring(0, textIndex)
    let blanks = ' '.repeat(text.length)
    let textAfterErase = currentWrittenText.substring(textIndexEnd)

    if (this.isEraserDurabilityLessThanTextLength(text)) {
        textIndex = (textIndex + (text.length - this.eraserDurability))

        textBeforeErase = currentWrittenText.substring(0, textIndex)
        blanks = ' '.repeat(this.eraserDurability)
        textAfterErase = currentWrittenText.substring(textIndexEnd, currentWrittenText.length)
    }

    this.eraserDegregation(text)
    this.paper.writtenText = textBeforeErase + blanks + textAfterErase
  }

  eraserDegregation(text) {
    if (!this.isNewlineOrSpace(text)) {
      this.eraserDurability -= text.length
    }
  }

  isEraserDurabilityLessThanTextLength(text) {
    return this.eraserDurability < text.length
  }

  edit(text) {
    let spaceIndex = this.paper.writtenText.indexOf('  ')
    let startEditIndex = spaceIndex + 1

    for (let letterIndex = 0; letterIndex < text.length; letterIndex++) {
      let replacement = this.getLetter(text, startEditIndex, letterIndex)

      this.pencilDegregation(text[letterIndex])
      this.paper.writtenText = this.replaceLetter(startEditIndex, letterIndex, replacement)
    }
  }

  getLetter(text, startEditIndex, letterIndex) {
    let letter = text.charAt(letterIndex)

    if (!this.isLetterAtIndexBlank(startEditIndex, letterIndex)) {
      letter = '@'
    }

    return letter
  }

  isLetterAtIndexBlank(startEditIndex, letterIndex) {
    return this.paper.writtenText[startEditIndex + letterIndex] == ' '
  }

  replaceLetter(startEditIndex, letterIndex, replacement) {
    let writtenText = this.paper.writtenText

    let textBeforeEdit = writtenText.substring(0, startEditIndex + letterIndex)
    let textAfterEdit = writtenText.substring(startEditIndex + letterIndex + 1)

    return textBeforeEdit + replacement + textAfterEdit
  }

  getDurability() {
    return Math.max(this.durability, 0)
  }

  getPencilLength() {
    return Math.max(this.pencilLength, 0)
  }

  getEraserDurability() {
    return Math.max(this.eraserDurability, 0)
  }
}
