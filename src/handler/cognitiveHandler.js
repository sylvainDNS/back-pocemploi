import { getEmotion } from '../utils/cognitiveApi'

export const cognitiveHandler = {
    moodify: (data, client) => {
        getEmotion(data.b64Img).then(res =>
            client.emit('message', { anger: res }))
    }
}
