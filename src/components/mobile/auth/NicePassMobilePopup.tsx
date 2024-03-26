'use client'

// import nicePassService from '@services/client/nicePass.service'
import { useRef, useState, useEffect } from 'react'
import PageUtil from '@utils/Page.util'
import $ from 'jquery'

const NicePassMobilePopup = ({ }) => {
    const [encData, setEncData] = useState('') // nicePass 인증시 필요한 데이터

    /****************************************************************************************** */
    /************************************** STATE ********************************************* */
    /****************************************************************************************** */
    useEffect(() => {
        if (encData) {
            $('#passAuthForm').attr('action', 'https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb')
            $('#passAuthForm').submit()
        }
    }, [encData])

    // onMount
    useEffect(() => {
        makeEncData()
    }, [])

    /****************************************************************************************** */
    /************************************** PAGE ********************************************* */
    /****************************************************************************************** */
    // // 부모 컴포넌트에서 사용할 로직
    // function onOpenPassPopup() {
    //     window.open(`/extern/pass/auth/mobile-pass-gate`, 'passPopup')
 
    //     window.addEventListener('message', e => {
    //         console.log('e',e)
    //         console.log('window.origin',window.origin)
    //         if (e.origin === window.origin) {
    //             console.log('origin 같음--------------------',)
    //             console.log('typeof e.data',typeof e.data)
    //             if(typeof e.data)

    //             props.setParams((prev: any) => ({
    //                 ...prev,
    //                 isAuthNicePass: e.data,
    //             }))
    //         }
    //     })
    // }

    /****************************************************************************************** */
    /************************************** BASIC ********************************************* */
    /****************************************************************************************** */
    // nicePass인증 encData 생성
    async function makeEncData() {
        try {
            // const res = await nicePassService.makeEncryptedRequestForCheckplus('ko')
            const res = { "result": "AgAFRzA4NDDEMvK3D7TUZBzAFbXXmk1TxdOYy+TrhuD9hKxsm5KIB8fpi4o/jHIzz5fhlGvJAg30llXm4ac0rQzgLJTJ7TgCHAi5MYKugb1f2MxTb60j7FnX59zQukJ9V5kPaw/SyoytoyjUhIf9bu7MgtlzleSNuOFT7FceKyA8jYfq4cB/3ZTk13qRHcSkObU6dvHfT+OjRYxeVX2DcxBKpyGdfYTtWSuCtvzRe0lI1onB67MeoCMUP/7fTYiEXTJSAZMkBqN6qkXoyl4yVvb+cV8dCIqhLTEydLv1d7EkyQt9ABCGtD/I9PR4ZjtaitwX+0lkpVFVdnPbIT/nPl2P7eW3CnJXBLsoy2M4TRSwhwt213z9d8X/dh2mteHFoCXv3T2qbNNt13vK/mVYXV7GifOE5HgdDz+q8Wq8WizIRZF+PMMv9uHf99r1Cf0I6DZYtrNo8gb6IKnUteE+BLqf3ouFKkUUUin2FCgpAzN0P1qUCLvcpA==" }
            setEncData(res.result)
        } catch (e) {
            PageUtil.handleApiError(null, e)
        }
    }

    /****************************************************************************************** */
    /**************************************** VAC ********************************************* */
    /****************************************************************************************** */
    return (
        <>
            <form name="passAuthForm" id="passAuthForm" method="post">
                <input type="hidden" name="m" value="checkplusSerivce" />
                <input type="hidden" name="EncodeData" value={encData} />
            </form>
        </>
    )
}

export default NicePassMobilePopup
