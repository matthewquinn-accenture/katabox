let writtenText = ''

export const write = (text) => {
  writtenText += text
}

export const getText = () => {
  return writtenText
}
