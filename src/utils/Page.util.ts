import $ from 'jquery'

function deepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj))
}

const sleep = (ms = 1000) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

function handleApiError(t: any, e: any): void {
    if (e.code == 'ERR_CANCELED' /*사용자 요청 취소*/ || e.code == 'ERR_BAD_REQUEST' /*401*/) {
        //
        return
    }
    console.log(e)

    if (t != null) {
        alert(`${t['API_ERR_COMMON']}`)
        return
    }

    if (e.response && e.response?.data && e.response?.data?.message) {
        alert(e.response?.data?.message)
    } else {
        //alert(e.response?.data?.error);
    }
}

function isValidUserName(name: string) {
    // 영문 대소문자, 한글, 공백 으로 구성되어있는지 확인
    const userNameRegex = /^[a-zA-Z가-힣\s]*$/

    return userNameRegex.test(name)
}

function isValidPwd(password: string): boolean {
    // 8~16자리의 문자열인지 확인
    if (password.length < 8 || password.length > 16) {
        return false
    }

    // 영문, 숫자, 특수문자가 각각 하나 이상 포함되었는지 확인
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@$%^&*/?#+_-])[A-Za-z0-9~!@$%^&*/?#+_-]{8,16}$/
    return regex.test(password)
}

function isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    // 정규 표현식을 사용하여 이메일 주소를 검증
    return emailRegex.test(email)
}

function isValidBirthday(dateString: string) {
    // 정규 표현식을 사용하여 yyyy-mm-dd 형식인지 확인
    var regex = /^\d{4}-\d{2}-\d{2}$/

    if (!regex.test(dateString)) {
        return false
    }

    return true
}

// html 태그제거 및 길이수 제한
export function removeHtml(origin: string, maxLen: number = 100): string {
    return origin.replace(/<[^>]*>/g, '').slice(0, maxLen)
}

export function print(printRef: any) {
    let printContent = printRef.current
    if (printContent) {
        let windowObj = window.open(
            '',
            'Print',
            'width=800, height=600, toolbars=no, scrollbars=no, status=no, resizable=no',
        )

        if (windowObj) {
            let content = $(printContent.innerHTML)
            content.find('.no-print').hide()

            //windowObj.document.writeln(`${'<link rel="stylesheet" type="text/css" href="/assets/css/print.css" media="print"'}${content.html()}`)
            //windowObj.document.write(`${'<link rel="stylesheet" type="text/css" href="/assets/css/print.css" />'}${content.html()}`)
            windowObj.document.write(
                '<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>Print</title>',
            )
            windowObj.document.write('<link rel="stylesheet" type="text/css" href="/assets/css/print.css" />')
            windowObj.document.write('</head><body>')
            windowObj.document.write(content.html())
            windowObj.document.write('</body></html>')
            windowObj.document.close()
            windowObj.focus()

            setTimeout(() => {
                if (windowObj) {
                    windowObj.print()
                    windowObj.close()
                }
            }, 300)
        }
    }
}

export default {
    handleApiError,
    deepCopy,
    isValidPwd,
    isValidUserName,
    isValidEmail,
    isValidBirthday,
    removeHtml,
    print,
}
