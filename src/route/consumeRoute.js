import { consumeHandler } from '../handler/consumeHandler'

export const consumeRoute = server => {
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
    server.route({
        method: 'GET',
        path: '/click',
        config: {
            handler: consumeHandler.getClick,
            description: 'Get click',
            notes: 'Returns tracked click.',
            tags: ['api']
        }
    })
}