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

  return bedtimeHours
}
