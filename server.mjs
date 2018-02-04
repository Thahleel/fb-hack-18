import express from 'express'

import { setupExpress } from './lib/express'
import FacebookEvents from './lib/facebook'
import DescriptionAnalyser from './lib/nlp'
import { icalGenerator } from './lib/ical'

import logger from './lib/logger'

/**
 * Async entry point for application.
 */
async function main() {

  logger.info( 'Starting...' )

  // Setup the express server
  const server = await setupExpress()

  // Hook in API routers here
  const apiRouter = express.Router()

  const facebook = new FacebookEvents();
  const nlp = new DescriptionAnalyser();

  apiRouter.get('/events', async (req, res) => {
    try {
      const lat = req.query.lat
      const lng = req.query.lng
      const events = await facebook.searchForEvents(lat, lng)
      const foodEvents = await nlp.filterFoodEvents(events)
      res.json(foodEvents)
    } catch (e) {
      res.status(500).json({error: e.message})
    }
  })
  server.use('/api', apiRouter)

  server.get('/ics', async (req, res) => {
    const lat = req.query.lat
    const lng = req.query.lng
    const events = await facebook.searchForEvents(lat, lng)
    const foodEvents = await nlp.filterFoodEvents(events)
    res.header('Content-Disposition', 'attachment; filename="food_events.ics"')
    res.header('Content-Type', 'text/calendar')
    icalGenerator(foodEvents, cal => res.send(cal))
  })

  // Start the server
  const port = process.env.PORT || 8080
  server.listen( port, () => logger.info( `Running express API server on port ${port}` ) )
}


// Handle any errors by crashing
main().catch( error => {
  logger.error( error )
  process.exit( 1 )
} )
