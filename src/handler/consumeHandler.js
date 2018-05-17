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
        const tempData = JSON.parse(data[i])

        const retData = {
            x: tempData.x,
            y: tempData.y,
            value: tempData.value
        }

        cleaned.push(retData)
    }

    return cleaned
}