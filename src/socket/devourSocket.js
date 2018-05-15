import { devourHandler } from '../handler/devourHandler'

export const devourSocket = (socket) => {
    socket.on('connection', (client) => {
        console.log('Client connected on socket', client.id)

        client.on('feed', devourHandler.feed)

        client.on('disconnect', function () {
            console.log('Client  disconnect on socket', client.id)
        })

        client.on('error', function (err) {
            console.log('Received error from socket :', client.id)
            console.log(err)
        })
    })
}
