mobiconStatistics
=================

[![Build Status](https://travis-ci.org/ysyun/mobiconStatistics.png?branch=master)](https://travis-ci.org/ysyun/mobiconStatistics)

include moving average for statistics

Moving average to predict next value and remove noize http://en.wikipedia.org/wiki/Moving_average


## Installation
    npm install mobiconStatistics

## Usage
    var mobicon = require('mobiconStatistics');
    // data : input data must be array
    // interval : usage data count and then move the data per 1 step
    // sample data
    var data = [23,45,67,89,99,46,64,23,200,34,54,41,52,150,49,57,61,38,34,56,90];
    // sample interval
    var interval = 4;
    var movingAverage = mobicon.calcMovingAverage(data, interval);
    
## Test
use the mocha and should.js

    npm test

## Author
Yun YoungSik 

http://mobicon.tistory.com

## License
MIT License
