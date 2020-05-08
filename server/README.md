
# Weather microservice using openweathermap API

[Demo](https://m-michelini-weather-widget-api.glitch.me/)

### Description
A node.js server that takes longitude and latitude,
or locations name and responds with some basic data about the city and weather.

### Usage
This API has a single endpoint at /api. To get data from the api, send a get request
to the url with a queery paramater of search.

- If search is enclosed in square brackets, it will be parsed as [latitude,longitude]
example: [/api?search=\[50,100\]](https://m-michelini-weather-api.glitch.me/api?search=\[50,100\])

- If search is enclosed in square brackets, it will be parsed as [latitude,longitude]
example: [/api?search=Melbourne](https://m-michelini-weather-api.glitch.me/api?search=Melbourne)

### If openweathermap is already hosting an api, why do I need this?
Openweathermap gives out a personal key to be used for developers, it must be kept secret.
If I use the api key on the client side, everyone can see my key, which really wouldn't have
too many consequences as they don't have my billing info, but it's good security practice anyway.