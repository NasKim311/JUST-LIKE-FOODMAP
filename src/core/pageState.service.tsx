import React from 'react'
import { pageSlice } from '@redux/pageReducer'
import store from '@redux/store'

/**
 * 1. savePageState
 * component unmount 시에 호출
 * 2. clearPageState
 * GNB에서 대메뉴로 이동시에 사용
 * 3. restorePageState
 * savePageState를 사용하는 페이지에서 mount 시에 저장된 상태가 있는지 체크하고 상태 복원
 */

const savePageState = (uri: string, obj: any, force?: boolean): void => {
    const nextUri = location.pathname

    // sub page 로 가는 경우가 아니면 페이지 상태 저장 안함
    // ex) /product -> /product/{product-code} (O)
    // /product -> /admin (X)
    if (nextUri.startsWith(uri) || force) {
        console.log('savePageState', uri, location.pathname, JSON.parse(JSON.stringify(obj)))
        store.dispatch(pageSlice.actions.add({ uri: uri, data: JSON.parse(JSON.stringify(obj)) }))
    }
}

const clearPageState = (): void => {
    store.dispatch(pageSlice.actions.clear(null))
}

const restorePageState = (uri: string): any => {
    let items = JSON.parse(JSON.stringify(store.getState().page.items))

    if (items.length > 0) {
        //const item = JSON.parse(JSON.stringify(items[items.length-1]));
        //console.log(items.map(p=>p.page).toString() , uri);

        let exists = items.map((p: { page: any }) => p.page).includes(uri)

        //    console.info("restorePageState" , uri , items.map(p=>p.page).toString() , exists,uri.startsWith(items[items.length-1].page));
        // console.log('existsexistsexistsexistsexistsexistsexistsexists', uri, exists, location.hash)

        if (!exists) {
            // sub depth 로 진입하는 경우가 아니면 clear
            // ex : /trip -> /trip/101
            if (!uri.startsWith(items[items.length - 1].page)) {
                store.dispatch(pageSlice.actions.clear(null))
            }
        } else {
            let cur: any = null
            let targets = new Array<any>()
            for (const item of items.reverse()) {
                targets.push(item.page)
                if (item.page == uri) {
                    cur = JSON.parse(JSON.stringify(item))
                    break
                }
            }

            for (let item of targets) {
                store.dispatch(pageSlice.actions.remove(item))
            }

            return cur == null ? null : cur?.state
        }
    }

    return null
}

export default { savePageState, clearPageState, restorePageState }
