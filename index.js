var inquirer = require('inquirer');
var weather = require('weather-js');
var gpio = require('rpi-gpio');
gpio.setup(7, gpio.DIR_IN, readInput);

function start() {
	inquirer
		.prompt([
			{
				message: 'Where do you want to check the weather?',

				name: 'location',
			},
		])
		.then(function(answer) {
			weather.find({ search: answer.location, degreeType: 'F' }, function(err, result) {
				if (err) console.log(err);
				console.log('currently it is ' + result[0].current.temperature + ' degrees');
				console.log(
					'tomorrow, ' +
						result[0].forecast[1].day +
						', has a high of ' +
						result[0].forecast[1].high +
						' and a low of ' +
						result[0].forecast[1].low
				);
			});
		});
}

function readInput() {
    gpio.read(7, function(err, value) {
        console.log('The value is ' + value);
    });
}

var switch = 0;

var piInterval = setInterval(readInput, 100)

