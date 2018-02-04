import ics from 'ics'

export function icalGenerator(events, outputter) {
  events.forEach(event => {
    ics.createEvent({
      start: _dateToArray(event.startTime),
      end: _dateToArray(event.endTime),
      title: event.name,
      description: event.description,
      location: event.location ? event.location.street + ', ' + event.location.city : null,
      url: 'https://www.facebook.com/' + event.id,
      geo: event.location ? { lat: event.location.latitude,
                              lon: event.location.latitude } : null
    }, (err, value) => {
      outputter(value)
    })
  })
}


function _dateToArray(dtString) {
  var dt = new Date(dtString)
  return [ dt.getFullYear(), dt.getMonth(), dt.getDay(), dt.getHours(), dt.getMinutes()]
}
