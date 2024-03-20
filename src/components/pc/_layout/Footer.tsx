'use client'

import { useRef, useState, useEffect } from 'react'
import FooterV from './Footer.v'
import PageUtil from '@utils/Page.util'

interface Params {
    error: any
    isLoaded: boolean
}

function Footer(props: any) {
    let initParams: Params = {
        error: null,
        isLoaded: false,
    }
    const [params, setParams] = useState(initParams)

    /****************************************************************************************** */
    /************************************** STATE ********************************************* */
    /****************************************************************************************** */

    /****************************************************************************************** */
    /************************************** PAGE ********************************************* */
    /****************************************************************************************** */

    /****************************************************************************************** */
    /************************************** BASIC ********************************************* */
    /****************************************************************************************** */

    /****************************************************************************************** */
    /**************************************** VAC ********************************************* */
    /****************************************************************************************** */
    const args = {
        t: props.t,
        locale: props.locale,
        params: params,
    }

    return <FooterV {...args} />
}
export default Footer
