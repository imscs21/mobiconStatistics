mobiconStatistics
=================

include moving average for statistics

# Installation
    npm install mobiconStatistics

# Usage
    var mobicon = require('mobiconStatistics');
    // data : input data must be array
    // interval : usage data count, step by 1 
    var data = [23,45,67,89,99,46,64,23,200,34,54,41,52,150,49,57,61,38,34,56,90];
    var interval = 4;
    var movingAverage = mobicon.calcMovingAverage(data, interval);
    
# Test
use the mocha and should.js

    npm test

# Author
Yun YoungSik 
http://mobicon.tistory.com

# License
MIT License
