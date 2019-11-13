const fs = require('fs')

const book = {
    title: 'test',
    author: 'heechangkang'
}

// return json data
const bookJSON = JSON.stringify(book)
console.log(bookJSON)

// return json object
const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)

// write a json file
fs.writeFileSync('1-json.json', bookJSON)

// get json data from .json file
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.author)