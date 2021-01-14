/* eslint-disable default-case */
const initState = {
    vorname: "",
    nachname: ""
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case "CHANGE_NAME":
        return {
            vorname: action.first,
            nachname: action.last
        }
        case "CHANGE_FIRST_NAME":
        /* nur eine einzelne Eigenschaft des State ändern  */
        return {
            ...state, /* alle bisherigen State-Eigenschaften übernehmen */
            vorname: action.first
        }
    }
    return state
}

export default rootReducer