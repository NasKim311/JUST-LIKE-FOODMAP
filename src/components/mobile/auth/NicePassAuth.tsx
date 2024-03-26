'use client'
 
import { useEffect } from 'react'
 
const NicePassAuth = ({ 
    msg, 
    isAuth
 } : {
    msg: string
    isAuth: string
 }) => {
 
    // onMount
    useEffect(() => {
        alert(msg)
        window.opener.postMessage(isAuth, '*') // 성공: 'Y', 실패: 'N'
        window.close()
    }, [])
 
    return <></>
}
 
export default NicePassAuth