/**
 * Simple logging with bunyan
 * @ignore
 */

import bunyan from 'bunyan'

const logger = bunyan.createLogger( { name: 'fb-hack-18' } )

export default logger
