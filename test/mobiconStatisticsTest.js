var should = require('should');
var service = require('../lib/mobiconStatistics');

describe('mobiconStatistics -', function() {

    beforeEach(function() {})
	
    var data = [23,45,67,89,99,46,64,23,200,34,54,41,52,150,49,57,61,38,34,56,90];
    var interval = 4;
    var ma = (38+34+56+90)/interval;
	  var lastCount = service.lastCount(data, interval);
      
	  it('slice', function() {
      data.slice(0, interval).should.include(89);
    });

    it('last count', function() {
      lastCount.should.equal(18);
    });

    it('nextValue', function() {
      var count = 17; // array last count = 18 
      var result = service.nextValue(data, interval, count);
      ma.should.equal(54.5);
      result.should.equal(ma);
    });

    it('moving average', function() {
      var result = service.calcMovingAverage(data, interval);
      result.length.should.equal(lastCount);
      result.should.include(ma);
    });
})
