import { configureStore, createSlice } from "@reduxjs/toolkit";
import getContentType from "../api/contentType";


let contentType = createSlice({
    name: 'contentType', //state이름 ~
    initialState: getContentType, //값
    reducers: {
    }
})

let sido = createSlice({
    name: 'sido', //state이름 ~
    initialState: [], //값
    reducers: {
        changeSido(state, action) {
            return [...action.payload]
        }
    }
})

let headerSearch = createSlice({
    name: 'headerSearch',
    initialState: [],
    reducers: {
        changeHeaderSearch(state, action) {
            return [...action.payload]
        }
    }
})

export let { changeSido } = sido.actions
export let { changeHeaderSearch } = headerSearch.actions

export default configureStore({
    reducer: {
        contentType: contentType.reducer,
        sido: sido.reducer,
        headerSearch: headerSearch.reducer
    }
})