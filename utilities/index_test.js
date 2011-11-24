/* util unit tests */

var test = function() {

  var u = require('./index').init();

  function run() {
    console.log(u.addit(3,2));
    console.log(u.subit(3,2));
    
    console.log(u.showMessage());
    console.log(u.showMessage('i am here!'));

    console.log(u.compute('add',2,2));
    console.log(u.compute('sutract',2,2));
    console.log(u.compute('multiply',2,2));
    console.log(u.compute('divide',2,2));
  }
  
  var that = {};
  that.run = run;
  return that;
  
}().run();