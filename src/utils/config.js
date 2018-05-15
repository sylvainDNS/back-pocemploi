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
    }
});