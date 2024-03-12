//const getPayload = token => jwtDecode(token)

//const getPayloadItem = (token, key) => JSON.parse(jwtDecode(token)[key])

function getPayload(token) {
    return {}
}

function getPayloadItem(token, key) {
    return { id: '', email: '', accountSeq: 0, chargerSeq: 0 }
}

export default {
    getPayload,
    getPayloadItem,
}
