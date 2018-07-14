import { isNickel, isDime, isQuarter } from './coin-box.js'

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
  } else if (isDime(coin)) {
    balance = 0.10
  } else {
    balance = 0.25
  }

  return balance
}
