import axios from './axios.service'

export type httpRequest = { req: Promise<any>; cancel: AbortController }
const apiBase = '/api'
let reqs = [] as any

const _getOption = (headers?: any, params?: any): any => {
    const controller = new AbortController()

    let result = {} as any
    if (headers) {
        result = Object.assign(headers, result)
    }
    if (params) {
        result['params'] = JSON.parse(JSON.stringify(params))
    }
    result['signal'] = controller.signal
    return { header: result, controller: controller }
}

const _request = (req: httpRequest): Promise<any> => {
    reqs.push(req)
    return req.req
}

const get = (uri: string, params?: any, headers?: any): Promise<any> => {
    try {
        let opt = _getOption(headers, params)
        return _request({ req: axios.get(apiBase + uri, opt.header), cancel: opt.controller })
    } catch (err) {
        console.error(err)
        throw err
    }
}

const post = (uri: string, data: any, headers?: any): Promise<any> => {
    try {
        let opt = _getOption(headers, null)
        return _request({ req: axios.post(apiBase + uri, data), cancel: opt.controller })
    } catch (err) {
        console.error(err)
        throw err
    }
}

const put = (uri: string, data: any, headers?: any): Promise<any> => {
    try {
        let opt = _getOption(headers, null)
        return _request({ req: axios.put(apiBase + uri, data), cancel: opt.controller })
    } catch (err) {
        console.error(err)
        throw err
    }
}

const remove = (uri: string, headers?: any): Promise<any> => {
    try {
        let opt = _getOption(headers, null)
        return _request({ req: axios.delete(apiBase + uri, { headers: opt.header }), cancel: opt.controller })
    } catch (err) {
        console.error(err)
        throw err
    }
}

const cancel = (): void => {
    for (let req of reqs) {
        console.log('cancel req >>>', req)
        req.cancel.abort()
    }

    reqs = []
}

export default { get, post, put, remove, cancel }
