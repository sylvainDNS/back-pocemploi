import { client, get } from '../utils/redis'

export const consumeHandler = {
    getMousemove: (request, h) => {
        const reply = get(client, 'mousemove')

        return reply.then((res) => {
            return res
        })
    },
    getClick: (request, h) => {
        const reply = get(client, 'click')

        return reply.then((res) => {
            return res
        })
    }
}