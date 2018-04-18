export const calculator = (input) => {
  let output;

  if (isFizz(input)) {
    output = "fizz"
  } else {
    output = input
  }

  return output
}

const isFizz = (input) => {
  return input % 3 == 0
}
