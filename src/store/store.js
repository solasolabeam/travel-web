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
let sidoVal = createSlice({
    name: 'sidoVal', //state이름 ~
    initialState: 0, //값
    reducers: {
        changeSidoVal(state, action) {
            return action.payload
        }
    }
})
let gugun = createSlice({
    name: 'gugun', //state이름 ~
    initialState: [], //값
    reducers: {
        changeGugun(state, action) {
            return [...action.payload]
        }
    }
})
let gugunVal = createSlice({
    name: 'gugunVal', //state이름 ~
    initialState: 0, //값
    reducers: {
        changeGugunVal(state, action) {
            return action.payload
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
export let { changeSidoVal } = sidoVal.actions
export let { changeGugun } = gugun.actions
export let { changeGugunVal } = gugunVal.actions
export let { changeHeaderSearch } = headerSearch.actions

export default configureStore({
    reducer: {
        contentType: contentType.reducer,
        sido: sido.reducer,
        sidoVal: sidoVal.reducer,
        gugun: gugun.reducer,
        gugunVal: gugunVal.reducer,
        headerSearch: headerSearch.reducer
    }
})