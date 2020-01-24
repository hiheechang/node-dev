const path = require('path')
const express = require('express')

const app = express()

// express config
app.set('view engine', 'hbs')
console.log(path.join(__dirname, '/public'))
app.use(express.static(path.join(__dirname, '/public')))


// routing
app.get('', (req, res) => {
    res.render('index', {
        title: 'successful rendering',
        name: 'heechang kang'
    })
})


// app.get('/', (req, res) => {
//     res.send(index.html)
// })


// app.get('/help', (req, res) => {

// })
// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>')
// })


app.get('/weather', (req, res) => {
    res.send({
        forecast: 'it is sunny',
        location: 'Gangnam, Seoul'
    })
})

app.listen(3000, () => {
    console.log("servering is up on 3000")
})