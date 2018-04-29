export const validateStartTime = (startTime) => {
  if (startTime < 5) {
    throw new Error("Can't start before 5PM!")
  }
}

export const validateBedtime = (bedtime) => {
  if (bedtime <= 4) {
    throw new Error("Can't stay up past MIDNIGHT!")
  }
}

export const validateEndtime = (endtime) => {
  if (endtime > 4) {
    throw new Error("Can't work later than 4AM!")
  }
}
