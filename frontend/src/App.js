import React, { Component } from 'react'
import 'typeface-roboto'

import EventList from './components/EventList'
import Switcher from './components/Switcher'

import './App.css'

class App extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      location: null,
      mode: 'Live',
      events: [],
    }
  }

  loadEvents = () => {
    const { mode } = this.state

    if ( mode === 'Saved' ) {
      // Load from Localstorage
      this.setState( {
        events: [
          { name: 'Foodie', timeStart: new Date( '2018-02-04 23:23:23' ) },
          { name: 'Foodie', timeStart: new Date( '2018-02-04 23:23:23' ) },
          { timeStart: new Date( '2018-02-04 23:23:23' ) },
          { timeStart: new Date( '2018-02-04 23:23:23' ) },
          { timeStart: new Date( '2018-02-04 23:23:23' ) },
          { timeStart: new Date( '2018-02-05 23:23:23' ) },
          { timeStart: new Date( '2018-02-06 23:23:23' ) },
        ],
      } )
    } else {
      // Load from API
      this.setState( {
        events: [
          { timeStart: new Date( '2018-02-04 23:23:23' ) },
          { timeStart: new Date( '2018-02-04 23:23:23' ) },
          { timeStart: new Date( '2018-02-04 23:23:23' ) },
          { timeStart: new Date( '2018-02-04 23:23:23' ) },
          { timeStart: new Date( '2018-02-04 23:23:23' ) },
          { timeStart: new Date( '2018-02-05 23:23:23' ) },
          { timeStart: new Date( '2018-02-05 23:23:23' ) },
          { timeStart: new Date( '2018-02-06 23:23:23' ) },
          { timeStart: new Date( '2018-02-06 23:23:23' ) },
          { timeStart: new Date( '2018-02-06 23:23:23' ) },
        ],
      } )
    }
  }

  componentDidMount() {
    this.loadEvents()
  }

  componentDidUpdate( prevProps, { mode: oldMode } ) {
    const { mode } = this.state

    if ( mode !== oldMode ) {
      this.loadEvents()
    }
  }

  render() {
    const { events, mode } = this.state

    return (
      <div className="app">
        <h1 className="title">Feed Me Forever</h1>
        <Switcher options={[ 'Live', 'Saved' ]}
                  selected={mode}
                  onChange={mode => this.setState( { mode } )}
        />
        <EventList events={events} />
      </div>
    )
  }
}

export default App
