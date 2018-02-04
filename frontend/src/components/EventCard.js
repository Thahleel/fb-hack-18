import React from 'react'

import { dateToHours } from '../utils'

import './EventCard.css'

const EventCard = ( {
  name,
  coverPicture,
  timeStart,
  timeEnd,
  placeName,
  details,
  price,
  foods,
} ) => (
  <div className="event">
    <img src={coverPicture} alt="Background" />
    <h2 className="name">{name}</h2>

    <span className="location">{placeName}</span>
    <span className="price badge">{price}</span>
    <span className="food badge">{foods}</span>
    <span className="time">{dateToHours( timeStart )} - {dateToHours( timeEnd )}</span>
  </div>
)

EventCard.defaultProps = {
  name: 'Pizza Society',
  placeName: 'Haha Building 101',
  price: 'Free',
  url: '',
  // foods: [ 'Pizza', 'Chips' ],
  coverPicture: 'https://scontent.xx.fbcdn.net/v/t31.0-8/26840868_1863083100369801_1670043283152809176_o.jpg?oh=072b5fefd1adb346b80f62e7743d831f&oe=5ADB862E',
}

export default EventCard
