import {IUiState, ISetValue_action} from "types/reducer_types"

const initialState: IUiState = { 
    stream: "",
    id: "",
    changeColor: 0,
    videoUrl: "",
    progress: 0, 
    selectedPage: "income",
}

export function ui_reducer (state: IUiState = initialState, action: ISetValue_action):IUiState {
    switch(action.type) {
        case "ui_reducer/SET_VALUE": return {...state, [action.id]: action.value}                                 //sets a simple id value pair within the reducer object  
        default: return state
    }
}

