import { dispatchType } from "./state"

export const addMessage = 'ADD-MESSAGE'

export const dialogsReducer = (state: any, action: dispatchType) => {

    if (action.type === addMessage) {
        console.log('ADD-MESSAGE')
        let newId = state.length + 1
        let newMessage = { id: newId, message: action.message }
        state.push(newMessage)
    }

    return state;
}

export let AddMessageActionCreator = (message: string) =>
    ({ type: addMessage, message: message } as const)

export default dialogsReducer;