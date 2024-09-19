import { WebSocketServer } from "ws"

const server = new WebSocketServer({ port: 5001 })

let sockets = []

server.on('connection', socket => {
    console.log('New user connected.')
    sockets.push(socket)

    socket.on('message', message => {
        const msg = JSON.parse(message)
        console.log(`Received message: ${message}`)


        for (let recipient of sockets) {
            recipient.send(JSON.stringify(msg))
        }
    })
});




