export const calculator = (input) => {
  let output;

  if (input % 3 == 0) {
    output = "fizz"
  } else {
    output = input
  }

  return output
}
