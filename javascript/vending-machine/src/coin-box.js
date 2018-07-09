export const isValidCoin = (coin) => {
  if (coin.size == 0.05 && coin.weight == 0.05 || coin.size == 0.01 && coin.weight == 0.01) {
    return true
  }
}
