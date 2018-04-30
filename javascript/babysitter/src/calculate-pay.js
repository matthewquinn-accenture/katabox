import { validateStartTime, validateEndtime, validateBedtime } from './validate-shifts'
import { calculateStartTimeHours, calculateBedtimeHours, calculateMidnightHours } from './calculate-hours'

const START_TIME_RATE = 12
const BEDTIME_RATE = 8
const MIDNIGHT_RATE = 16

const calculateStartTimePay = (startTime, bedtime, endtime) => {
  validateStartTime(startTime)
  return calculateStartTimeHours(startTime, bedtime, endtime) * START_TIME_RATE
}

const calculateBedtimePay = (startTime, bedtime, endtime) => {
  validateBedtime(bedtime)
  return calculateBedtimeHours(startTime, bedtime, endtime) * BEDTIME_RATE
}

const calculateMidnightPay = (startTime, bedtime, endtime) => {
  validateEndtime(endtime)
  return calculateMidnightHours(startTime, bedtime, endtime) * MIDNIGHT_RATE
}

const calculateTotalPay = (startTime, bedtime, endtime) => {
  return calculateStartTimePay(startTime, bedtime, endtime) +
         calculateBedtimePay(startTime, bedtime, endtime) +
         calculateMidnightPay(startTime, bedtime, endtime)
}

export { START_TIME_RATE, calculateStartTimePay, BEDTIME_RATE, calculateBedtimePay, MIDNIGHT_RATE, calculateMidnightPay, calculateTotalPay }
