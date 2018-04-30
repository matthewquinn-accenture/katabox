const MIDNIGHT = 12

export const calculateStartTimeHours = (startTime, bedtime, endtime) => {
  let startTimeHours = (bedtime - startTime)

  if (startTime > bedtime) {
    startTimeHours = 0
  }

  return startTimeHours
}

export const calculateBedtimeHours = (startTime, bedtime, endtime) => {
  let bedtimeHours = (MIDNIGHT - bedtime)

  if ((MIDNIGHT - endtime) < 8) {
    bedtimeHours = (endtime - bedtime)
  }
  return bedtimeHours
}

export const calculateMidnightHours = (startTime, bedtime, endtime) => {
  let midnightHours = (endtime - 0)

  if ((MIDNIGHT - endtime) < 8) {
    midnightHours = 0
  }

  return midnightHours
}
