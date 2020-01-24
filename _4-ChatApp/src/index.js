const path = require('path')
const http = require('http')
const express = require("express")
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

// config express
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

const port = process.env.PORT || 3000
server.listen(port, () => {
    console.log(`server is up on port ${port}`)
})

// routing
let count = 0

io.on('connection', (socket) => {
    console.log("new WebSocket Connection")

    socket.emit('countUpdated', count)

    socket.on('increment', () => {
        count++
        /// emit to specific connection
        // socket.emit('countUpdated', count)
        io.emit('countUpdated', count)
    })
})