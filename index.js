var inquirer = require('inquirer');
var weather = require('weather-js');
var Gpio = require('pigpio').Gpio,
  button = new Gpio(4, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
  })

button.on('interrupt', function (level) {
  console.log(level)
});
