require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();


app.use('/public', express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

const fetchWeather = (req,res,params) => {
  params = {...params, APPID:process.env.API_KEY};
  axios.get('http://api.openweathermap.org/data/2.5/weather',{params})
  .then(resp=>resp.data)
  .then(data=>{
    res.status(200).json(data)
  }).catch(err=>{
    let errorMsg = err.response.data.message;
    errorMsg = errorMsg[0].toUpperCase() + errorMsg.substring(1);
    res.status(err.response.data.cod).json({errorMsg})
  })
}

const validCoords = (lat,lon) =>{
  return(
    lat<=90 &&
    lat>=-90 &&
    lon<=180 &&
    lon>=-180
  )
}

const searchIsCoords = search => (
  search[0]==='['&&
  search[search.length-1]===']'
)
app.get('/', function (req, res) {
   res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/api',(req,res)=>{
  const {search} = req.query;
  if(searchIsCoords(search)){
    const coords = search
      .substring(1,search.length-2) //remove brackets
      .split(',')
      .map(Number)
    console.log(coords)
    
    if(coords.length===2 && validCoords(...coords)){
      fetchWeather(req,res,{lat:coords[0],lon:coords[1]})
    }else{
      res.status(400).json({errorMsg:"Invalid Coordinates"})
    }
  }else{
    fetchWeather(req,res,{q:search})
  }
})

app.get('/api/city/:city',(req,res)=>{
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
