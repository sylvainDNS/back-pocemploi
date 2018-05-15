import { set, client } from '../utils/redis'
import uuid from 'uuid/v4'

export const devourHandler = {
    feed: (data) => set(client, 'trackingData', uuid(), JSON.stringify(data))
}