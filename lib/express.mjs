/**
 * Express Server.
 * @ignore
 */

import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

import logger from './logger'

const DEFAULT_MIDDLEWARE = [ cors() ]

/**
 * Sets up Express
 * @param middleware Any array of middleware that will be registered
 * @returns {Function} The instance of the http server
 */
export const setupExpress = ( middleware = [] ) => {
  const allMiddleware = [ ...DEFAULT_MIDDLEWARE, ...middleware ]

  logger.info( 'Setting up express' )
  const app = express()

  allMiddleware.forEach( m => app.use( m ) )
  logger.info( 'Loaded all middleware' )

  return app
}
