import { cognitiveHandler } from '../handler/cognitiveHandler'

export const cognitiveSocket = (socket) => {
    const cognitive = socket.of('/cognitive')

    cognitive.on('connection', (client) => {
        console.log('Client connected on Cognitive socket', client.id)

        client.on('moodify', (data) => cognitiveHandler.moodify(data, client))

        client.on('disconnect', function () {
            console.log('Client disconnect on Cognitive socket', client.id)
        })

        client.on('error', function (err) {
            console.log('Received error from Cognitive socket :', client.id)
            console.log(err)
        })
    })
}
