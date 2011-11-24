/*
common utiliites
2011-11-22 (mca)

usage:
  var util = require('./utilities'),init();
  util.addit(1,2);
*/
exports.init = function() {
  
  var g = {};
  g.message = 'this is a message';
  
  function addit(x,y) {
    return x+y;
  }
  
  function subit(x,y) {
    return x-y;
  }
  
  function showMessage(m) {
    return m||g.message;
  }

  function compute(method, arg1, arg2) {
    var rtn;
    
    switch(method) {
      case 'add':
        rtn = arg1+arg2;
        break;
      case 'subtract':
        rtn = arg1-arg2;
        break;
      case 'multiply':
        rtn = arg1*arg2;
        break;
      case 'divide':
        rtn = arg1/arg2;
        break;
      default:
        rtn = 0;
    }
    return rtn;
  }
  
  //publish methods
  var that = {};
  that.addit = addit;
  that.subit = subit;
  that.showMessage = showMessage;
  that.compute = compute;
  
  return that;
};