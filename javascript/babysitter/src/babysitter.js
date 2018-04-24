export class Babysitter {
  constructor(startTime = 5, bedtime = 8, endtime = 2) {
      this.startTime = startTime
      this.bedtime = bedtime
      this.endtime = endtime

      this.validateStartTime(this.startTime)
      this.validateEndtime(this.endtime)
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
