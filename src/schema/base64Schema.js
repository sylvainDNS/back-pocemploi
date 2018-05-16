import joi from 'joi'

const base64Schema = joi.object().keys({
    b64Img: joi.string().base64()
})

const stringSchema = joi.object().keys({
    b64Img: joi.string()
})

export const validate = (data) => {
    const boolString = joi.validate(data, stringSchema, (err, value) => {
        return err ? false : true
    })

    let replacedData
    if (boolString)
        replacedData = { b64Img: data.b64Img.replace('data:image/jpeg;base64,', '') }

    const bool64 = joi.validate(replacedData, base64Schema, (err, value) => {
        return err ? false : true
    })

    return boolString && bool64
}