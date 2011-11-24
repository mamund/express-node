/* util unit tests */

var test = function() {

  var assert = require('assert');
  var u = require('./index').init();

  function run() {
    simple();
    showMessage();
    compute();
    console.log('done');
  }

  function simple() {
    assert.equal(u.addit(3,2),5);
    assert.equal(u.subit(3,2),1);  
  }
  
  function showMessage() {
    assert.equal(u.showMessage(),'this is a message');
    assert.equal(u.showMessage('i am here!'),'i am here!');
  }
  
  function compute() {
    assert.equal(u.compute('add',2,2),4);
    assert.equal(u.compute('subtract',2,2),0);
    assert.equal(u.compute('multiply',2,2),4);
    assert.equal(u.compute('divide',2,2),1);

    assert.equal(u.compute('add',2,2),4);
    assert.equal(u.compute('sub',2,2),0);
    assert.equal(u.compute('mul',2,2),4);
    assert.equal(u.compute('div',2,2),1);

    assert.equal(u.compute('a',2,2),4);
    assert.equal(u.compute('s',2,2),0);
    assert.equal(u.compute('m',2,2),4);
    assert.equal(u.compute('d',2,2),1);

    assert.equal(u.compute('+',2,2),4);
    assert.equal(u.compute('-',2,2),0);
    assert.equal(u.compute('*',2,2),4);
    assert.equal(u.compute('/',2,2),1);
  }
  
  var that = {};
  that.run = run;
  return that;
  
}().run();