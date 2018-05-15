import { config } from './utils/config'
import { client } from './utils/redis'
import { Server } from 'hapi'
import Io from 'socket.io'
import { devourSocket } from './socket/devourSocket'

const start = () => {
    const server = new Server({
        host: config.hapi.host,
        port: config.hapi.port,
        routes: { cors: { origin: ['*'] } }
    })

    server.register([])
        .then(() => {
            server.start()
                .then(
                    res => console.log('Server listening on', server.info.uri),
                    err => {
                        console.error(err)
                    }
                )
        })

    const socket = Io(server.listener)

    devourSocket(socket)

    return server
}

export default { start }