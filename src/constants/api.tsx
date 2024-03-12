const SERVER_REVALIDATE_NORMAL: number = 1 // server api fetch 주기 : 5분
const SERVER_REVALIDATE_SHORT: number = 1 // server api fetch 주기 : 1분
const SERVER_REVALIDATE_LONG: number = 1 // server api fetch 주기 : 1시간
const SERVER_REVALIDATE_Day: number = 1 // server api fetch 주기 : 하루 (60 * 60 * 24)

export default {
    SERVER_REVALIDATE_NORMAL,
    SERVER_REVALIDATE_SHORT,
    SERVER_REVALIDATE_LONG,
    SERVER_REVALIDATE_Day,
}
