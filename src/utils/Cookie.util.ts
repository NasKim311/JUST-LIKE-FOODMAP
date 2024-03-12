import { Cookies } from 'react-cookie'

function set(key: string, obj: any, opt: any = { path: '/' }): void {
    const cookies = new Cookies()
    cookies.set(key, obj, opt)
}
function get(key: string): any {
    return new Cookies().get(key)
}

function remove(key: string): void {
    const cookies = new Cookies()
    cookies.remove(key, { path: '/' })
}

export default {
    set,
    get,
    remove,
}
