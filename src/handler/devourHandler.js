import { set, client } from '../utils/redis'
import uuid from 'uuid/v4'

export const devourHandler = {
    feed: (data) => {
        const toPush = {
            x: data.x,
            y: data.y,
            value: data.value,
            URI: data.URI
        }

        set(client, data.type, uuid(), JSON.stringify(toPush))
    }

}