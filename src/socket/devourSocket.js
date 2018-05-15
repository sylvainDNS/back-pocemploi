import { devourHandler } from '../handler/devourHandler'

export const devourSocket = (socket) => {
    socket.on('connection', () => {
        console.log('Client connected on socket ! ')
        socket.on('message', function (message) {
            console.log('Un client me parle ! Il me dit : ' + message)
         
        })
    })
}
