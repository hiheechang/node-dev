// from MapBox_API, by inputting address get longtitude,latitude
// get weather from Darksky_API

const request = require('request')

const url = 'https://api.darksky.net/forecast/c95583e57dca7d6e35f5e66c4e2e80ba/37.8267,-122.4233?units=si'

request({ url: url, json: true }, (error, response) => {
    ///error handling
    if(error){
        console.log('unable to connect to weather service')
    }else if(response.body.error){
        console.log('unable to find location')
    } else{
    console.log(response.body.daily.data[0].summary)

    }
    // console.log(response);
    // const data = JSON.parse(response.body)
    // console.log(data)
})


const geocode

