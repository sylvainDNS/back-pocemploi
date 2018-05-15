import { recordHandler } from '../handler/recordHandler'

export const consumeRoute = server => {
    server.route({
        method: 'GET',
        path: '/record',
        config: {
            handler: recordHandler.get,
            description: 'Get record',
            notes: 'Returns tracking data record',
            tags: ['api']
        }
    })
}