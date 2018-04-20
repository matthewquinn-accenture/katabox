const START_TIME_RATE = 12
const BEDTIME_RATE = 8

const MIDNIGHT = 12

const calculateStartTime = (startTime, bedTime) => {
  return (bedTime - startTime) * START_TIME_RATE
}

const calculateBedtime = (bedtime) => {
  return (MIDNIGHT - bedtime) * BEDTIME_RATE
}

export { START_TIME_RATE, calculateStartTime, BEDTIME_RATE, calculateBedtime }
