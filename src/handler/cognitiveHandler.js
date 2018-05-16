import { getEmotion } from '../utils/cognitiveApi'
import { validate } from '../schema/base64Schema'

export const cognitiveHandler = {
    moodify: (data, client) => {
        if (validate(data)) {
            getEmotion(data.b64Img).then(res => {
                client.emit('message', { anger: res })
            })
        } else {
            client.emit('message', { error: 'Bad data sent' })
        }
    }
}
