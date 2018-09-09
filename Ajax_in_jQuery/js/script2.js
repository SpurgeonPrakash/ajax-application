"use strict";

// jQuery request
(function() {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
	var apiKey = "APIKEY"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work

	$.get(url + '&appid=' + apiKey).done(function(response) {
		updateUISuccess(response);
	}).fail(function(error) {
		console.log(error);
		updateUIError();
	});

	// handle success
	function updateUISuccess(response) {
		var condition = response.weather[0].main;
		var degC = response.main.temp - 273.15;
		var degCInt = Math.floor(degC);
		var degF = degC * 1.8 + 32;
		var degFInt = Math.floor(degF);
		var $weatherBox = $('#weather');
		$weatherBox.append("<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>");
	}

	// handle error
	function updateUIError() {
		var $weatherBox = $('#weather');
		$weatherBox.addClass('hidden');
	}
})();
