export const isValidCoin = (coin) => {
  if (isNickel(coin) || isDime(coin) || isQuarter(coin)) {
    return true
  }
}

export const isNickel = (coin) => {
  return (
    coin.size == 0.05 &&
    coin.weight == 0.05
  )
}

export const isDime = (coin) => {
  return (
    coin.size == 0.01 &&
    coin.weight == 0.01
  )
}

export const isQuarter = (coin) => {
  return (
    coin.size == 0.15 &&
    coin.weight == 0.20
  )
}
