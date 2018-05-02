const MIDNIGHT = 12

export const calculateStartTimeHours = (startTime, bedtime, endtime) => {

  return Math.max(0, (bedtime - startTime))
}

export const calculateBedtimeHours = (startTime, bedtime, endtime) => {
  bedtime = Math.max((endtime - bedtime), 0)
  endtime = Math.min(4, (MIDNIGHT - endtime))

  return Math.max(bedtime, endtime)
}

export const calculateMidnightHours = (startTime, bedtime, endtime) => {
  endtime = Math.min(endtime, 5) + 12

  return Math.max((16 - endtime), 0)
}
