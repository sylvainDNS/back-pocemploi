import { devourHandler } from '../handler/devourHandler'

export const devourSocket = (socket) => {
    const devour = socket.of('/devour')

    devour.on('connection', (client) => {
        console.log('Client connected on Devour socket', client.id)

        client.on('feed', devourHandler.feed)

        client.on('disconnect', function () {
            console.log('Client disconnect on Devour socket', client.id)
        })

        client.on('error', function (err) {
            console.log('Received error from Devour socket :', client.id)
            console.log(err)
        })
    })
}
