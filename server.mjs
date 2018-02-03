import express from 'express'

import { setupExpress } from './lib/express'
import FacebookEvents from './lib/facebook'

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

  apiRouter.get('/events', async (req, res) => {
    try {
      const events = await facebook.searchForEvents()
      res.json(events)
    } catch (e) {
      res.status(500).send(JSON.stringify(e));
    }
  })
  server.use('/api', apiRouter)


  // Start the server
  const port = process.env.PORT || 8080
  server.listen( port, () => logger.info( `Running express API server on port ${port}` ) )
}


// Handle any errors by crashing
main().catch( error => {
  logger.error( error )
  process.exit( 1 )
} )
