import React from 'react'

import EventCard from './EventCard'

import './EventList.css'

const EventList = ( { events } ) => (
  <div className="event-list">
    {
      events.map( event => <EventCard {...event} /> )
    }
  </div>
)

export default EventList
