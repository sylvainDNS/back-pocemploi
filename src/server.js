import { config } from './utils/config'
import { Server } from 'hapi'
import io from 'socket.io'
import HapiSwagger from 'hapi-swagger'
import Vision from 'vision'
import Inert from 'inert'
import { devourSocket } from './socket/devourSocket'
import { cognitiveSocket } from './socket/cognitiveSocket'
import { consumeRoute } from './route/consumeRoute'

const start = () => {
    const server = new Server({
        host: config.hapi.host,
        port: config.hapi.port,
        routes: { cors: { origin: ['*'] } }
    })

    const swaggerOptions = {
        info: {
            title: 'Poc\'Emploi API Documentation',
            version: '1.0',
        },
    }

    server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }])
        .then(() => {
            server.start()
                .then(
                    res => console.log('Server listening on', server.info.uri),
                    err => {
                        console.error(err)
                    }
                )
        })

    const socket = io(server.listener, { serveClient: false })


    consumeRoute(server)

    devourSocket(socket)
    cognitiveSocket(socket)

    return server
}

export default { start }