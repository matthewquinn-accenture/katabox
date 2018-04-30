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

export const calculateEndtimeHours = (startTime, bedtime, endtime) => {
  let endtimeHours = (endtime - 0)

  return endtimeHours
}
