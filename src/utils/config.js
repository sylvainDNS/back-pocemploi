import env from 'common-env'

export const config = env().getOrElseAll({
    redis: {
        host: 'localhost',
        port: '6379',
        password: null
    },
    hapi: {
        host: 'localhost',
        port: '4444'
    },
    faceapi: {
        uri: 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect',
        key: '833b1045d00d48618ee8215ea83cd366'
    }
});