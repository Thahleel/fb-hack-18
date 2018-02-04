/**
 * Common JS functions.
 */

import moment from 'moment'
import groupBy from 'lodash/groupBy'

// Converts a day into HH:mm format
export const dateToHours = date => moment( date ).format( 'HH:mm' )

// Buckets dates into buckets of day, given a prop
export const bucketDates = ( objs, prop ) => groupBy(
  objs,
  obj => moment( obj[ prop ] ).startOf( 'day' ).format(),
)

// Returns 'Today' if the date is such
export const getToday = day =>
  ( moment( new Date() )
    .startOf( 'day' )
    .isSame( moment( day ).startOf( 'day' ) ) ? 'Today' : false )

// Returns 'Tomorrow' if the date is such
export const getTomorrow = day =>
  ( moment( new Date() )
    .add( 1, 'days' )
    .startOf( 'day' ).isSame( moment( day ).startOf( 'day' ) ) ? 'Tomorrow' : false )

// Returns a human-formatted string of the day
export const getDay = day => moment( day ).format( 'dddd Do MMMM' )
