import { consumeHandler } from '../handler/consumeHandler'

export const mousemoveRoute = server => {
    server.route({
        method: 'GET',
        path: '/mousemove',
        config: {
            handler: consumeHandler.getMousemove,
            description: 'Get mousemove',
            notes: 'Returns tracked mousemove.',
            tags: ['api']
        }
    })
}