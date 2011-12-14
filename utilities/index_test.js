/* util unit tests */

var test = function () {

    var assert = require('assert');
    var u = require('./index').init();

    function run() {
      console.log(new Date() + ' start');
      simple();
      showMessage();
      console.log(new Date() + ' end');
    }

    function simple() {
      assert.equal(u.addit(3, 2), 5);
      assert.equal(u.subit(3, 2), 1);
    }

    function showMessage() {
      assert.equal(u.showMessage(), 'this is a message');
      assert.equal(u.showMessage('i am here!'), 'i am here!');
    }

    var that = {};
    that.run = run;
    return that;

}().run();