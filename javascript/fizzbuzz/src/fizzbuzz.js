export const calculator = (input) => {
  let output;

  if (input % 5 == 0) {
    output = "buzz"
  } else if (isFizz(input)) {
    output = "fizz"
  } else {
    output = input
  }

  return output
}

const isFizz = (input) => {
  return input % 3 == 0
}
