var onoff = require('onoff');

var Gpio = onoff.Gpio,
    led1 = new Gpio(16, 'out'),
    led2 = new Gpio(21, 'out'),
    interval;

interval = setInterval(function () {
    var value = (led1.readSync() + 1) % 2;
    led1.write(value, function() {
      console.log("Changed LED 1 state to: " + value);
    });
    led2.write(value, function() {
      console.log("Changed LED 2 state to: " + value);
    });
  }, 200);

led1.writeSync(0); 
led2.writeSync(0);
led1.unexport(); 
led2.unexport(); 

process.exit();