export class Babysitter {
  constructor(startTime, bedtime, endtime) {
    if (startTime === undefined) {
      this.startTime = 5
    } else {
      this.startTime = this.validateStartTime(startTime)
    }

    this.bedtime = 8

    if (endtime === undefined) {
      this.endtime = 2
    } else {
      this.endtime = this.validateEndtime(endtime)
    }
  }

validateStartTime(startTime) {
   if (startTime < 5) {
      throw new Error("Can't start before 5PM!")
    }
  }

validateEndtime(endtime) {
   if (endtime > 4) {
      throw new Error("Can't work later than 4AM!")
    }
  }
}
