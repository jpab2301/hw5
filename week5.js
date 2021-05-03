// Goal: Implement a weather application using data from an external API
// - Signup for an api key @ https://weatherapi.com
// - The API takes three inputs (querystring parameters)
//   - key = your API key
//   - q = a location query (e.g. Chicago)
//   - days = number of days of forecast data to return, between 1-10
// - Example: https://api.weatherapi.com/v1/forecast.json?key=b923e85e62fb4d44b0f172307212704&q=Chicago&days=3
// - The basic recipe (algorithm) is included; write the rest of the recipe in the comments!
// - Lab: Follow the provided recipe and the "mock-up" provided in the hard-coded HTML; respond 
//        to the user filling out the location on the form by fetching the weather API and 
//        displaying the city/state, e.g. if the user enters "chicago" on the form, show "Current
//        Weather for Chicago, Illinois".
// - Homework: Complete the application by accepting a number of days; show the current weather 
//             conditions and forecast based on the number of days entered by the user.

window.addEventListener('DOMContentLoaded', async function() {
  // Get a reference to the "get weather" button
let getWeatherButton= document.querySelector(`.get-weather`)
  // When the "get weather" button is clicked:
  getWeatherButton.addEventListener(`click`, async function(event) {

    // - Ignore the default behavior of the button
    event.preventDefault()
    // - Get a reference to the element containing the user-entered location
    let locationInput = document.querySelector(`#location`)
    // - Get the user-entered location from the element's value
    let location = locationInput.value

    // - Get a reference to the element containing the user-entered location
    let daysInput = document.querySelector(`#days`)
    // - Get the user-entered location from the element's value
    let days = daysInput.value

    // - Check to see if the user entered anything; if so:
    if (location.length > 0 && days.length >=0){
      // - Construct a URL to call the WeatherAPI.com API
    let url = `https://api.weatherapi.com/v1/forecast.json?key=b923e85e62fb4d44b0f172307212704&q=${location}&days=${days}`
      // - Fetch the url, wait for a response, store the response in memory
      let response = await fetch(url)
      // - Ask for the json-formatted data from the response, wait for the data, store it in memory
      let json = await response.json()
      // - Write the json-formatted data to the JavaScript console
    // console.log (json)
      // - Store the interpreted location, current weather conditions, the forecast as three separate variables

      // - Continue the recipe yourself!
  
let interpretedLocation = `${json.location.name}, ${json.location.region}`
let weatherCurrent = json.current
let weatherForecast = json.forecast.forecastday

  // Create a variable for the HTML element we're going to add to
let currentWeather=document.querySelector(`.current`)

  // modify the copied HTML code for current day
currentWeather.insertAdjacentHTML(`beforeend`, `
<div class="text-center space-y-2">
<div class="font-bold text-3xl">Current Weather for ${interpretedLocation}</div>
<div class="font-bold">
  <img src="https://${weatherCurrent.condition.icon}" class="inline-block">
  <span class="temperature">${weatherCurrent.temp_f}</span>° 
  and
  <span class="conditions">${weatherCurrent.condition.text}</span>
</div>
</div>
</div>

`)

let forecastWeather=document.querySelector(`.forecast`)
forecastWeather.insertAdjacentHTML(`beforeend`, `
<div class="text-center space-y-8">
<div class="font-bold text-3xl">${days} Day Forecast</div>
</div>
</div>`)

// loop for displaying forecast
  // Create a variable for the HTML element we're going to add to
  for (let i=0; i<days; i++){
   
    let forecastedDay=weatherForecast[i]
console.log(forecastedDay)
    let forecastWeather=document.querySelector(`.forecast`)
    forecastWeather.insertAdjacentHTML(`beforeend`, `
    <div class="text-center space-y-8">
    <div>
      <img src="https:${forecastedDay.day.condition.icon}" class="mx-auto">
      <h1 class="text-2xl text-bold text-gray-500">${forecastedDay.date}</h1>
      <h2 class="text-xl">High ${forecastedDay.day.maxtemp_f}° – Low ${forecastedDay.day.mintemp_f}°</h2>
      
      <p class="text-gray-500">${forecastedDay.day.condition.text}</h1>
    </div>
    </div>
    `)

  }
  


}
})
})

//unable to add .text
//unable to add weatherForecast

//     <div class="text-center space-y-8">
//     <div class="font-bold text-3xl">${days} Day Forecast</div>
//     <div>
//       <img src="https://${weatherForecast.condition.icon}" class="mx-auto">
//       <h1 class="text-2xl text-bold text-gray-500">${forecastDay.date}</h1>
//       <h2 class="text-xl">High ${forecastDay.day.maxtemp_f}° – Low ${forecastDay.day.mintemp_f}°</h2>
//       <p class="text-gray-500">${forecastedDay.condition.text}</h1>
//     </div>

//   </div>
// </div>