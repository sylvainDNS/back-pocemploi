import { client, get } from '../utils/redis'

export const consumeHandler = {
    getMousemove: (request, h) => {
        const reply = get(client, 'mousemove')

        return reply.then((res) => {
            return cleanData(res)
        })
    },
    getClick: (request, h) => {
        const reply = get(client, 'click')

        return reply.then((res) => {
            return cleanData(res)
        })
    }
}

const cleanData = data => {
    let cleaned = []
    for (let i in data) {
        cleaned.push(data[i])
    }

    return cleaned
}