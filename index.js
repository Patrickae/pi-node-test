var inquirer = require('inquirer');
var weather = require('weather-js');
var Gpio = require('onoff').Gpio;
var button = new Gpio(17, 'in', 'both');

button.watch(function (err, value) {
  if (err) {
    throw err;
  }

  console.log(value)
});


process.on('SIGINT', function () {
  button.unexport();
});
