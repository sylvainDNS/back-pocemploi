import joi from 'joi'

const replySchema = joi.object().keys({
    faceAttributes: joi.object().keys({
        emotion: joi.object().required()
    }),
    faceRectangle: joi.object().keys(),
    faceId: joi.required()
})

export const validate = (data) => {
    return joi.validate(data[0], replySchema, (err, value) => {
        return err ? false : true
    })
}