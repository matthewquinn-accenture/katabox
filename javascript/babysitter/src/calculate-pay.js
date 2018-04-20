const START_TIME_RATE = 12

const calculateStartTime = (startTime, bedTime) => {
  return (bedTime - startTime) * START_TIME_RATE
}

export { START_TIME_RATE, calculateStartTime }
