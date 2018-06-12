
$(document).ready(()=>{
	//console.log("Sanity Check");
	$('#weather-form').submit((event)=>{
		// By default, the browser will try and submit this form
		// We dont want that.
		// Its JS job to handle the submission.
		event.preventDefault();
		//console.log("FORM SUBMITTED!!");
		// get the city the use rsearched for from the form
		const userCity = $('#city').val()
		// console.log(userCity);
		const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=imperial&appid=${apiKey}`
		//console.log(weatherUrl);
		$.getJSON(weatherUrl, (weatherData)=>{
			console.log(weatherData);
			const currTemp = weatherData.main.temp;
			const icon = weatherData.weather[0].icon;
			const high = weatherData.main.temp_max;
			const weatherHTML = `
				<div>
					<img class="col-sm-1" src="http://openweathermap.org/img/w/${icon}.png" /> 
					<div class="col-sm-12">The temp in ${weatherData.name} is ${currTemp}</div>
					<div class="col-sm-12">The high is forecasted at ${high}</div>
				</div>
			`
			$('#weather-info').html(weatherHTML);
		})
	})
})