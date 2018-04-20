const START_TIME_RATE = 12
const BEDTIME_RATE = 8
const MIDNIGHT_RATE = 16

const MIDNIGHT = 12

const calculateStartTime = (startTime, bedTime) => {
  return (bedTime - startTime) * START_TIME_RATE
}

const calculateBedtime = (bedtime) => {
  return (MIDNIGHT - bedtime) * BEDTIME_RATE
}

const calculateMidnight = (endTime) => {
  return (endTime - 0) * MIDNIGHT_RATE
}

const calculateTotalPay = (startTime, bedtime, endTime) => {
  return calculateStartTime(startTime, bedtime) +
         calculateBedtime(bedtime) +
         calculateMidnight(endTime)
}

export { START_TIME_RATE, calculateStartTime, BEDTIME_RATE, calculateBedtime, MIDNIGHT_RATE, calculateMidnight, calculateTotalPay }
