import React from 'react'

import { dateToHours } from '../utils'

import './EventCard.css'

const EventCard = ( {
  name,
  imageUrl,
  timeStart,
  timeEnd,
  location,
  details,
  price,
  foods,
} ) => (
  <div className="event">
    <img src={imageUrl} alt="Background" />
    <h2 className="name">{name}</h2>

    <span className="location">{location}</span>
    <span className="price badge">{price}</span>
    <span className="food badge">{foods}</span>
    <span className="time">{dateToHours( timeStart )} - {dateToHours( timeEnd )}</span>
  </div>
)

EventCard.defaultProps = {
  name: 'Pizza Society',
  location: 'Haha Building 101',
  timeStart: Date.now(),
  timeEnd: Date.now(),
  price: 'Free',
  url: '',
  // foods: [ 'Pizza', 'Chips' ],
  imageUrl: 'https://scontent.xx.fbcdn.net/v/t31.0-8/26840868_1863083100369801_1670043283152809176_o.jpg?oh=072b5fefd1adb346b80f62e7743d831f&oe=5ADB862E',
}

export default EventCard
