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
    const getAsync = promisify(client.hgetall).bind(client)

    return getAsync(setName).then((res) => {
        return res
    })
}

export const set = (client, setName, key, data) => {
    return client.hset(setName, key, data)
}

export const client = init() 