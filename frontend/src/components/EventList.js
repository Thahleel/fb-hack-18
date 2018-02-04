import React from 'react'

import { bucketDates, getToday, getTomorrow, getDay } from '../utils'

import EventCard from './EventCard'

import './EventList.css'

const EventList = ( { events } ) => (
  <div className="events">
    {Object.entries( bucketDates( events, 'timeStart' ) ).map( ( [ day, events ] ) => (
      <div className="event-group">
        <h3 className="date">{getToday( day ) || getTomorrow( day ) || getDay( day )}</h3>
        <div className="event-list">
          {events.map( event => <EventCard key={event.id} {...event} /> )}
        </div>
      </div>
    ) )}
  </div>
)

export default EventList
