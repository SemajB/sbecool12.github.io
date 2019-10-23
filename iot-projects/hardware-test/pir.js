var Gpio = require('onoff').Gpio
var sensor = new Gpio(4, 'in', 'both');

sensor.watch((err, val) => {
    if(err){
        console.log('An Error Took Place');
    } else{
        console.log(val);
    }
});

var exit = (err) => {
    if(err){
        console.log('An Error Took Place');
    } else {
        sensor.unexport();
        process.exit();
    }
}

process.on('SIGINT', exit);