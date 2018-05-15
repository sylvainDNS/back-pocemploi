import { config } from './config'
import redis from 'redis'
import { promisify } from 'util'

const init = () => {
    const client = redis.createClient(config.redis.port, config.redis.host)

    client.on("error", (err) => {
        console.error(err);
    });

    return client
}

export const get = (client, setName) => {
    const getAsync = promisify(client.get).bind(client)

    return getAsync(setName).then((res) => {
        console.log('Result : ', res)
    })
}

export const set = (client, setName, data) => {
    return client.set(setName, data)
}

export const client = init() 