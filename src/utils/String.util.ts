function strToJson(str: string): any {
    let target = str.replace(/\n/g, '\\n')
    target = target.replace(/\t/g, '\\t')
    return JSON.parse(target)
}

// _temp.{ext} 파일명 실제 저장될 파일명으로 변경
export default { strToJson }
