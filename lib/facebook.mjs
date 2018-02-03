import FB from 'fb'
import EventSearch from 'facebook-events-by-location-core'

export class FacebookEvents {
  constructor() {
    this.searchApi = new EventSearch();
  }

  searchForEvents() {
    return this.searchApi.search({
      accessToken: FB_API_KEY,
      lat: 51.5273067,
      lng: -0.66201,
      since: "now"
    })
  }

}

export default FacebookEvents
