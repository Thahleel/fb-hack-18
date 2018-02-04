import FB from 'fb'
import EventSearch from './eventSearch'

export class FacebookEvents {
  constructor() {
    this.searchApi = new EventSearch();
  }

  async searchForEvents(lat, lng) {
    const resp = await this.searchApi.search({
      accessToken: process.env.FB_API_KEY,
      lat: lat,
      lng: lng,
      since: "now",
      distance: 500
    })
    return resp.events.map(event => {
      return {
        id: event.id,
        name: event.name,
        coverPicture: event.coverPicture,
        startTime: event.startTime,
        endTime: event.endTime,
        location: event.location
      }
    })
  }

}

export default FacebookEvents
