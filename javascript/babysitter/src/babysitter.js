export class Babysitter {
  constructor(startTime, bedtime, endtime) {
    if (startTime === undefined) { 
      this.startTime = 5
    } else {
      this.startTime = this.validateTime(startTime)
    }

    this.bedtime = 8
    this.endtime = 2
  }

validateTime(startTime) {
   if (startTime < 5) {
      throw new Error("Can't start before 5PM!")
    }
  }
}
