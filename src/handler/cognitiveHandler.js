import { getEmotion } from '../utils/cognitiveApi'

export const cognitiveHandler = {
    moodify: (data, client) => {
        if (typeof data.b64Img === 'string') {
            getEmotion(data.b64Img).then(res => {
                client.emit('message', { anger: res })
            })
        }
    }
}
