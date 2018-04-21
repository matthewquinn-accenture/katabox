import { Babysitter } from './babysitter'

const START_TIME_RATE = 12
const BEDTIME_RATE = 8
const MIDNIGHT_RATE = 16

const MIDNIGHT = 12

let babysitter = new Babysitter()

const calculateStartTime = () => {
  return (babysitter.bedtime - babysitter.startTime) * START_TIME_RATE
}

const calculateBedtime = () => {
  return (MIDNIGHT - babysitter.bedtime) * BEDTIME_RATE
}

const calculateMidnight = () => {
  return (babysitter.endtime - 0) * MIDNIGHT_RATE
}

const calculateTotalPay = () => {
  return calculateStartTime(babysitter.startTime, babysitter.bedtime) +
         calculateBedtime(babysitter.bedtime) +
         calculateMidnight(babysitter.endtime)
}

export { START_TIME_RATE, calculateStartTime, BEDTIME_RATE, calculateBedtime, MIDNIGHT_RATE, calculateMidnight, calculateTotalPay }
