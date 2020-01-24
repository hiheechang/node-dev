const socket = io()

// server -> client
// event emit from index.js
socket.on('countUpdated', (count) =>{
    console.log('count has been updated', count)
})

// client -> server
document.querySelector('#increment').addEventListener('click', ()=>{
    console.log('clicked')
    socket.emit('increment')
})