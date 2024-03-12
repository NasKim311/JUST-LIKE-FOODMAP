import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    loaded: false,
    items: new Array<any>(),
}

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        add: (state, action) => {
            const uri = action.payload.uri
            let val = JSON.parse(JSON.stringify(action.payload.data))

            // console.log('pageSlice', uri, val)

            if (state.items.length > 0) {
                if (uri == state.items[state.items.length - 1].page) {
                    state.items[state.items.length - 1] = { page: uri, state: val }
                } else {
                    state.items.push({ page: uri, state: val })
                }
            } else {
                state.items.push({ page: uri, state: val })
            }

            // console.log('pageSlice.add', state.items.length)
        },

        clear: (state, action) => {
            if (state.items.length > 0) {
                if (state.items[state.items.length - 1].page != location.pathname) {
                    console.log(
                        'pageReducer.clear',
                        state.items.map(p => p.page),
                    )
                    state.items = []
                    console.log('pageReducer.clear 강제 데이타 초기화')
                }
            }
        },

        remove: (state, action) => {
            let uri = action.payload
            console.log(
                'pageReducer.remove',
                state.items.map(p => p.page),
            )
            state.items = state.items.filter(p => p.page != uri)
            console.log('pageReducer.remove 데이타 삭제', uri)
        },
    },
})

export default pageSlice.reducer
