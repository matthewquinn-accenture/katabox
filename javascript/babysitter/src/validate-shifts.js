export const validateStartTime = (startTime) => {
  if (isStartTimeBefore5PM(startTime)) {
    throw new Error("Can't start before 5PM!")
  }
}

const isStartTimeBefore5PM = (startTime) => {
  return startTime < 5
}

export const validateBedtime = (bedtime) => {
  if (isBedtimeAfterMidnight(bedtime)) {
    throw new Error("Can't stay up past MIDNIGHT!")
  }
}

const isBedtimeAfterMidnight = (bedtime) => {
  return bedtime <= 4
}

export const validateEndtime = (endtime) => {
  if (isEndtimeAfter4AM(endtime)) {
    throw new Error("Can't work later than 4AM!")
  }
}

const isEndtimeAfter4AM = (endtime) => {
  return (endtime > 4) && (12 - endtime) >= 5
}
