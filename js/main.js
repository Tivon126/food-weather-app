/* -------------------------------------------------------
   Function for getting weather information
   ------------------------------------------------------- */

function weatherBalloon() {
  var key = 'e35ca5623af73c61e78b08a4d03a4462';
  var lat = '41.825226';
  var lon = '-71.418884';
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data);
    console.log(data);
  })
  .catch(function() {
    // catch any errors
  });
}


/* -------------------------------------------------------
   Function for display weather information
   ------------------------------------------------------- */

function drawWeather( d ) {

  // placeholder div for testing output
  $('.weather').html(d.current.weather[0].description);
  $('.current h2').html(convertTemp(d.current.temp));
  $('.high p').html(convertTemp(d.daily[0].temp.max));
  $('.low p').html(convertTemp(d.daily[0].temp.min));

   //day 0
  $('.current .current-icon').html(printGraphic(d.current.weather[0].description));
  $('.up .high').html(convertTemp(d.daily[0].temp.max));
  $('.down .low').html(convertTemp(d.daily[0].temp.min));

  //day 1
  $('.extended-forecast li:nth-child(1) h4').html(displayDay(1));
  $('.extended-forecast li:nth-child(1) .icon').html(printGraphic(d.daily[1].weather[0].description));
  $('.extended-forecast li:nth-child(1) .high').html(convertTemp(d.daily[1].temp.max));
  $('.extended-forecast li:nth-child(1) .low').html(convertTemp(d.daily[1].temp.min));

  //day 2
  $('.extended-forecast li:nth-child(2) h4').html(displayDay(2));
  $('.extended-forecast li:nth-child(2) .icon').html(printGraphic(d.daily[2].weather[0].description));
  $('.extended-forecast li:nth-child(2) .high').html(convertTemp(d.daily[2].temp.max));
  $('.extended-forecast li:nth-child(2) .low').html(convertTemp(d.daily[2].temp.min));

  //day 3
  $('.extended-forecast li:nth-child(3) h4').html(displayDay(3));
  $('.extended-forecast li:nth-child(3) .icon').html(printGraphic(d.daily[3].weather[0].description));
  $('.extended-forecast li:nth-child(3) .high').html(convertTemp(d.daily[3].temp.max));
  $('.extended-forecast li:nth-child(3) .low').html(convertTemp(d.daily[3].temp.min));

  //day 4
  $('.extended-forecast li:nth-child(4) h4').html(displayDay(4));
  $('.extended-forecast li:nth-child(4) .icon').html(printGraphic(d.daily[4].weather[0].description));
  $('.extended-forecast li:nth-child(4) .high').html(convertTemp(d.daily[4].temp.max));
  $('.extended-forecast li:nth-child(4) .low').html(convertTemp(d.daily[4].temp.min));

  //day 5
  $('.extended-forecast li:nth-child(5) h4').html(displayDay(5));
  $('.extended-forecast li:nth-child(5) .icon').html(printGraphic(d.daily[5].weather[0].description));
  $('.extended-forecast li:nth-child(5) .high').html(convertTemp(d.daily[5].temp.max));
  $('.extended-forecast li:nth-child(5) .low').html(convertTemp(d.daily[5].temp.min));

  //day 6
  $('.extended-forecast li:nth-child(6) h4').html(displayDay(6));
  $('.extended-forecast li:nth-child(6) .icon').html(printGraphic(d.daily[6].weather[0].description));
  $('.extended-forecast li:nth-child(6) .high').html(convertTemp(d.daily[6].temp.max));
  $('.extended-forecast li:nth-child(6) .low').html(convertTemp(d.daily[6].temp.min));

}



/* --------------------------------------------------
   Event to get weather information when page loads
   -------------------------------------------------- */

window.onload = function() {
  weatherBalloon();
}

/* --------------------------------------------------
   Hide the cover screen
   -------------------------------------------------- */
$('.cover button').click(function(){
  $('.cover').addClass('slide');
})