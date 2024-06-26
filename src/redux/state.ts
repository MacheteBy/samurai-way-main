import dialogsReducer, { AddMessageActionCreator } from "./dialogs-reducer"
import { AddPostActionCreator } from "./profile-reducer"


export type RootStateType = {
    dialogsPage: DialogsPageType,
    postPage: PostPageType,
    navbarFriends: VavbarFriendsType,
}


export type DialogsPageType = {
    dialogs: DialogType[],
    messages: MessageType[],
}

type MessageType = {
    id: number,
    message: string,
}

type DialogType = {
    id: number,
    name: string,
}

export type PostPageType = {
    post: PostsType[]
}

export type PostsType = {
    id: number,
    postText: string,
    like: number,
}

export type VavbarFriendsType = {
    friends: FriendsType[],
}

type FriendsType = {
    id: number,
    name: string,
}

export type StoryType = {
    _state: RootStateType
    getState: () => RootStateType
    rerenderEntireTree: () => void
    // addPost: (postMessage: string) => void
    subscribe: (callback: () => void) => void
    dispatch: (action: dispatchType) => void
}

export type dispatchType = AddPostActionType | AddMessageActionType

export type AddPostActionType = ReturnType<typeof AddPostActionCreator>
export type AddMessageActionType = ReturnType<typeof AddMessageActionCreator>


let store: StoryType = {
    _state: {
        dialogsPage: {
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
        },
        postPage: {
            post: [
                { id: 1, postText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', like: 12 },
                { id: 2, postText: 'Lorem ipsum, dolor sit amet consectetur', like: 28 },
                { id: 3, postText: 'Lorem ipsum, dolor sit amet', like: 89 },
            ],
        },
        navbarFriends: {
            friends: [
                { id: 1, name: 'Alex' },
                { id: 2, name: 'Max' },
                { id: 3, name: 'Roma' },
            ]
        }
    },
    getState() {
        return this._state
    },
    rerenderEntireTree() {
    },
    // addPost(postMessage: string) {
    //     let newId = store._state.postPage.post.length + 1
    //     let newPost = { id: newId, postText: postMessage, like: 0 }
    //     store._state.postPage.post.push(newPost)
    //     store.rerenderEntireTree()
    // },
    subscribe(callback: () => void) {
        store.rerenderEntireTree = callback
    },
    dispatch(action) {
        store._state.dialogsPage.messages = dialogsReducer(store._state.dialogsPage.messages, action);
        // store._state.postPage.post = profileReducer(store._state.postPage.post, action)
        this.rerenderEntireTree()
    }
}




export default store;