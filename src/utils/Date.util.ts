import moment from 'moment'
import 'moment/locale/ko'

export const dateFormat = (date: Date, format?: string) => {
    if (!format) {
        format = 'YYYY.MM.DD'
    }
    return moment(date).format(format)
}

export const strToDate = (ymd: string, format?: string) => {
    if (!format) {
        format = 'YYYYMMDD'
    }

    return moment(ymd, format).toDate()
}

export function toHoursAndMinutes(totalSeconds: any, format?: string) {
    const totalMinutes = Math.floor(totalSeconds / 60)

    const seconds = totalSeconds % 60
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60

    if (!format) {
        format = 'Hh Mm'
    }
    return format.replace('H', hours.toString()).replace('M', minutes.toString())
}
