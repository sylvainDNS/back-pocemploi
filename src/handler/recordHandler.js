import { client, get } from '../utils/redis'



export const recordHandler = {
    get: (request, h) => {
        const reply = get(client, 'trackingData')

        return reply.then((res) => {
            return res
        })
    }
}