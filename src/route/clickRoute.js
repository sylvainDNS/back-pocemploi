import { consumeHandler } from '../handler/consumeHandler'

export const clickRoute = server => {
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