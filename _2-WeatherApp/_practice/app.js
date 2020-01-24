const request = require('request');

const url = 'https://api.darksky.net/forecast/c95583e57dca7d6e35f5e66c4e2e80ba/37.8267,-122.4233?units=si'

request({ url: url, json: true}, (error, response) => {
    // console.log(response);
    // const data = JSON.parse(response.body)
    // console.log(data)
    console.log(response.body.daily.data[0].summary)
})