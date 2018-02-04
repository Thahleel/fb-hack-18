import React, { Component } from 'react'
import 'typeface-roboto'

import EventList from './components/EventList'

import './App.css'

class App extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      location: null,
      events: [
        { timeStart: new Date( '2018-02-04 23:23:23' ) },
        { timeStart: new Date( '2018-02-04 23:23:23' ) },
        { timeStart: new Date( '2018-02-04 23:23:23' ) },
        { timeStart: new Date( '2018-02-04 23:23:23' ) },
        { timeStart: new Date( '2018-02-04 23:23:23' ) },
        { timeStart: new Date( '2018-02-04 23:23:23' ) },
        { timeStart: new Date( '2018-02-05 23:23:23' ) },
        { timeStart: new Date( '2018-02-06 23:23:23' ) },
      ],
    }
  }

  render() {
    const { events } = this.state

    return (
      <div className="app">
        <h1 className="title">Feed Me Forever</h1>
        <EventList events={events} />
      </div>
    )
  }
}

export default App
