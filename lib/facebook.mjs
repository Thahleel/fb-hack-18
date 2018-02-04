import FB from 'fb'
import EventSearch from './eventSearch'

export class FacebookEvents {
  constructor() {
    this.searchApi = new EventSearch();
  }

  searchForEvents() {
    return this.searchApi.search({
      accessToken: process.env.FB_API_KEY,
      lat: 51.5273067,
      lng: -0.66201,
      since: "now",
      distance: 500
    })
  }

}

export default FacebookEvents
