export class DescriptionAnalyser {
  constructor() {
    this.keywords = new RegExp(/\b(food|pizza|eat|lunch|dinner|breakfast|catered|(drink|snack|meal)s?)\b/)
  }

  filterFoodEvents(events) {
    return events.filter(event => {
      return this.keywords.test(event.description)
    })
  }

}

export default DescriptionAnalyser
