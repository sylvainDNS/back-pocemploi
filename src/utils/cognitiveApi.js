import { config } from '../utils/config'
import fetch from 'node-fetch'

const maxValueObject = object => {
    return Object.keys(object).reduce((a, b) => object[a] > object[b] ? a : b)
}

const b64ToBinary = (b64Img) => {
    let base64Data = b64Img.replace(/^data:image\/jpeg;base64,/, "")
    base64Data += base64Data.replace('+', ' ');
    const binaryData = new Buffer(base64Data, 'base64')

    return binaryData
}


export const getEmotion = b64Img => {
    // Request parameters.
    const params = {
        'returnFaceId': 'true',
        'returnFaceLandmarks': 'false',
        'returnFaceAttributes': 'emotion'
    }

    const binaryData = b64ToBinary(b64Img)
    // Perform the REST API call.
    return fetch(config.faceapi.uri + '?returnFaceAttributes=emotion',
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/octet-stream',
                'Ocp-Apim-Subscription-Key': config.faceapi.key
            },
            method: 'POST',
            body: binaryData
        })
        .then(res => res.json())
        .then(json => {
            const listEmotions = json[0].faceAttributes.emotion
            const emoMax = maxValueObject(listEmotions)

            return emoMax == 'anger' ? true : false
        })
        .catch(res => { console.log(res) })

}