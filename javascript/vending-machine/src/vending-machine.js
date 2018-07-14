import { isNickel, isDime } from './coin-box.js'

let balance = 0

export const display = () => {
  let display = "INSERT COIN"

  if (balance > 0) {
    display = balance
  }

  return display
}

export const insert = (coin) => {
  if (isNickel(coin)) {
    balance = 0.05
  } else {
    balance = 0.10
  }

  return balance
}
