'use client'

import { useRef, useState, useEffect } from 'react'
import MainV from './Main.v'
import PageUtil from '@utils/Page.util'
import mainService from '@services/main.service'


interface Params {
    error: any
    isLoaded: boolean

    isAuthNicePass: string

}

function Main(props: any) {
    let initParams: Params = {
        error: null,
        isLoaded: false,

        isAuthNicePass: ''

    }
    const [params, setParams] = useState(initParams)
    console.log('params', params)

    /****************************************************************************************** */
    /************************************** STATE ********************************************* */
    /****************************************************************************************** */
    // onMount
    useEffect(() => {
        getMainList(props.locale)
    },[])

    /****************************************************************************************** */
    /************************************** PAGE ********************************************* */
    /****************************************************************************************** */

    /****************************************************************************************** */
    /************************************** BASIC ********************************************* */
    /****************************************************************************************** */
    async function getMainList(locale: string) {
        try {
            const res = await mainService.getMainList(locale)
            console.log('res', res)

        } catch(e) {
            PageUtil.handleApiError(null, e)
        }
    }

    /****************************************************************************************** */
    /**************************************** VAC ********************************************* */
    /****************************************************************************************** */
    const args = {
        t: props.t,
        locale: props.locale,
        params: params,
    }

    return <MainV {...args} />
}
export default Main
