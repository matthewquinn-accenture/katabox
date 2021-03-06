export const calculator = (input) => {
  let output;

  if (isFizzbuzz(input)) {
      output = "fizzbuzz"
  } else if (isBuzz(input)) {
      output = "buzz"
  } else if (isFizz(input)) {
      output = "fizz"
  } else {
      output = input
  }

  return output
}

const isFizzbuzz = (input) => {
  return input % 15 == 0
}

const isBuzz = (input) => {
  return input % 5 == 0
}

const isFizz = (input) => {
  return input % 3 == 0
}
