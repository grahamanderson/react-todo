// import moment from '/node_modules/moment'
// console.log(moment.now())
// var date = moment.now()
//
// import * as moment from 'moment';
var moment = require('moment')
// console.log (moment('2016-03-12 13:00:00').add(1, 'day').format('LLL')
// )
var now = moment()
console.log(now.unix())

var timestamp = 1496265641
var currentMoment = moment.unix(timestamp)
// console.log('current moment', currentMoment.format('MMM D, YY @ h:mm a' ))

console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A' ))



// January 3rd, 2016 @ 12:14 AM
// console.log('current moment', currentMoment.format("MMM ddd, hA, Y" ))
//
