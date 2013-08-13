/**
 *  Moving Average for Statistics
 *  http://mobicon.tsitory.com
 *  (c) 2013~2014 MobiConSoft
 *  MIT license.
 */
'use strict';
var _ = require('underscore');

var service = {};
service.calcMovingAverage = function(data, interval) {

	var result = [];
	var last = this.lastCount(data, interval);
	for(var i=0 ; i<last ; i++) {
		var maData = this.nextValue(data, interval, i); 
		//console.log('--->  ' + i + ': ' + maData);
		result.push(maData);
	}
	return result;
}

service.lastCount = function(data, interval) {
	return data.length - interval + 1;
}

service.nextValue = function(data, interval, count) {
	var arr = data.slice(count, count+interval);
	//console.log('\n---->', arr);
	var result = _.reduce(arr, function(memo, num){ return memo + num; }, 0) / arr.length;
	return result;
}

module.exports = service;