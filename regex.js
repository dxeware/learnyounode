var myString = '2015-12-28T01:15:22.208Z';
var splits = myString.split(/(:)/);
var hour = splits[0].split(/(T)/);
var mins = splits[2];
var secs = splits[4].split(/(\.)/);


console.log(splits);
console.log('hour', hour[2]);
console.log('mins', mins);
console.log('secs', secs[0]);

var str = 'For more information, see Chapter 3.4.5.1';
var re = /(chapter \d+(\.\d)*)/i;
var found = str.match(re);
console.log(found);

var str = '2015-12-28T01:15:22.208Z';
var re = /\d+T(\d{2}):(\d{2}):(\d{2}).*/i;
var found = str.match(re);
console.log(found);