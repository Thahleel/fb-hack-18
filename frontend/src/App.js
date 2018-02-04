import React, { Component } from 'react'
import 'typeface-signika'

import logo from './assets/logo.png'

import EventList from './components/EventList'
import Switcher from './components/Switcher'

import './App.css'

class App extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      location: {
        lat: 52.379252,// warwick
        lng: -1.561470,
      },
      mode: 'Live',
      events: [],
    }
  }

  loadEvents = async () => {
    const { mode, location: { lat, lng } } = this.state

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
      const events = (
        await (
          await fetch( `http://localhost:8080/api/events?lat=${lat}&lng=${lng}` ) )
          .json()
      )
        .map( event => ( {
          ...event,
          timeStart: new Date( event.startTime ),
          timeEnd: new Date( event.endTime ),
        } ) )
        .sort( ( { timeStart: t1 }, { timeStart: t2 } ) => t1 - t2 )

      console.log( events )

      this.setState( { events } )
    }
  }

  getCurrentPosition() {
    return new Promise( ( resolve, reject ) => {
      navigator.geolocation.getCurrentPosition( ( position ) => {

        let latitude = position.coords.latitude
        let longitude = position.coords.longitude

        resolve( { latitude, longitude } )

      }, () => {
        reject( 'We could not get your location.' )
      }, { timeout: 5000 } )
    } )
  }

  componentDidMount() {
    this.loadEvents()
    this.getCurrentPosition()
      .then( ( { latitude, longitude } ) => this.setState( {
        location: {
          lat: latitude,
          lng: longitude,
        }
      } ) )
      .catch( e => console.error( e ) )
  }

  componentDidUpdate( prevProps, { mode: oldMode } ) {
    const { mode } = this.state

    if ( mode !== oldMode ) {
      this.loadEvents()
    }
  }

  render() {
    const { events, mode, location: { lat, lng } } = this.state

    console.log( this.state.location )

    return (
      <div className="app">
        <div className="background" />
        <div className="title">
          <img className="logo" src={logo} />
          <h1>Feed Me Forever</h1>
          <a href={`http://localhost:8080/ics?lat=${lat}&lng=${lng}`} target="_blank">iCal</a>
        </div>
        {/*<Switcher options={[ 'Live', 'Saved' ]}*/}
        {/*selected={mode}*/}
        {/*onChange={mode => this.setState( { mode } )}*/}
        {/*/>*/}
        <EventList events={events} />
      </div>
    )
  }
}

export default App
