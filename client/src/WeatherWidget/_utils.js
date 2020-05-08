const API_URL = 'https://m-michelini-weather-widget-api.glitch.me/api/';

export const kelvinConverter = {
  toCelcius:k=>Math.round(k-273),
  toFarenheight:k=>Math.round((k-273)*9/5+32)
}

export const fetchWeather = query => {
  return fetch(`${API_URL}?search=${query}`)
    .then(res=>{
      return res.json();
    }).then(data=>{
      if(data.cod===200){
        return data
      }else{
        throw(new Error(data.errorMsg||"Something went wrong."))
      }
    })
  }
