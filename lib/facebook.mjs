import FB from 'fb'
import EventSearch from './eventSearch'

export class FacebookEvents {
  constructor() {
    this.searchApi = new EventSearch();
    this.nameCancelledRegExp = new RegExp("(?:^|\W)CANCELLED|Cancelled|cancelled(?:$|\W)");
  }

  async searchForEvents(lat, lng) {
    const resp = await this.searchApi.search({
      accessToken: process.env.FB_API_KEY,
      lat: lat,
      lng: lng,
      since: "now",
      distance: 1000
    })
    return resp.events.map(event => {
      return {
        id: event.id,
        name: event.name,
        coverPicture: event.coverPicture,
        startTime: event.startTime,
        endTime: event.endTime,
        location: event.location || event.venue.location,
        placeName: event.place.name,
        description: event.description,
      }
    }).filter(({ isCancelled }) => !isCancelled)
    .filter(event => !event.name.match(this.nameCancelledRegExp) )
  }

}

export default FacebookEvents
