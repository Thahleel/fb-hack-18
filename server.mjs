import { setupExpress } from './lib/express'

import logger from './lib/logger'

/**
 * Async entry point for application.
 */
async function main() {

  logger.info( 'Starting...' )

  // Setup the express server
  const server = await setupExpress()

  // Hook in API routers here

  // Start the server
  const port = process.env.PORT || 8080
  server.listen( port, () => logger.info( `Running express API server on port ${port}` ) )
}


// Handle any errors by crashing
main().catch( error => {
  logger.error( error )
  process.exit( 1 )
} )
