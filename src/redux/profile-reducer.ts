import { dispatchType } from "./state"

export const addPost = 'ADD-POST'

const profileReducer = (state: any, action: dispatchType) => {

    if (action.type === addPost) {
        console.log('ADD-POST')
        let newId = state.length + 1
        let newPost = { id: newId, postText: action.inputValue, like: 0 }
        state.push(newPost)
        // return [...state, newPost]
    }

    return state;
}

export let AddPostActionCreator = (inputValue: string) =>
    ({ type: addPost, inputValue: inputValue } as const)

export default profileReducer;