import { dispatchType } from "./state"

export const addPost = 'ADD-POST'

let initialState = {
    post: [
        { id: 1, postText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', like: 12 },
        { id: 2, postText: 'Lorem ipsum, dolor sit amet consectetur', like: 28 },
        { id: 3, postText: 'Lorem ipsum, dolor sit amet', like: 89 },
    ],
}

const profileReducer = (state: any = initialState, action: dispatchType) => {

    if (action.type === addPost) {
        console.log('ADD-POST')
        let newId = state.post.length + 1
        let newPost = { id: newId, postText: action.inputValue, like: 0 }
        return {...state, post:[...state.post, newPost]}
    }

    return state;
}

export let AddPostActionCreator = (inputValue: string) =>
    ({ type: addPost, inputValue: inputValue } as const)

export default profileReducer;