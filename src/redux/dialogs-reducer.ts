import { Messages } from "../components/Dialogs/Messages/Messages"
import { dispatchType } from "./state"

export const addMessage = 'ADD-MESSAGE'

let initialState = {
    dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Vika' },
        { id: 3, name: 'Alina' },
        { id: 4, name: 'Vasia' },
        { id: 5, name: 'Masha' },
    ],
    messages: [
        { id: 1, message: 'Lorem ipsum dolor sit amet.' },
        { id: 2, message: 'Lorem ipsum dolor sit amet consectetur' },
        { id: 3, message: 'Lorem ipsum dolor sit amet consectetur' },
        { id: 4, message: 'Lorem ipsum dolor sit.' },
    ],
}

export const dialogsReducer = (state: any = initialState, action: dispatchType) => {
    switch (action.type) {
        case addMessage: {
            console.log(addMessage)
            let newId = state.messages.length + 1
            let newMessage = { id: newId, message: action.message }
            return { ...state, messages: [...state.messages, newMessage] }
        }
        default:
            return state
    }
}

export let AddMessageActionCreator = (message: string) =>
    ({ type: addMessage, message } as const)

export default dialogsReducer;