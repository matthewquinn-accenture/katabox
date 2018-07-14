let balance = 0

export const display = () => {
  let display = "INSERT COIN"

  if (balance > 0) {
    display = balance
  }

  return display
}

export const insert = (coin) => {
  balance = 0.10
}
