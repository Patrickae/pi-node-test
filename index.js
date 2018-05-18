var inquirer = require('inquirer');
var weather = require('weather-js');
const Gpio = require('pigpio').Gpio;

// Calling export with a pin number will export that header and return a gpio header instance
var gpio.export(pin, {ready: fn});


const button = new Gpio(4, {mode: Gpio.INPUT,pullUpDown: Gpio.PUD_DOWN,edge: Gpio.EITHER_EDGE});

button.on('change', function (level) {
  console.log(level)
});
