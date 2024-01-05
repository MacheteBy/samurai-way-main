// let rerenderEntireTree = () => {
//     console.log('State changed')
// }


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

type PostsType = {
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


let store = {
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
                {id: 1, postText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', like: 12},
                {id: 2, postText: 'Lorem ipsum, dolor sit amet consectetur', like: 28},
                {id: 3, postText: 'Lorem ipsum, dolor sit amet', like: 89},
            ]
        },
        navbarFriends: {
            friends: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Max'},
                {id: 3, name: 'Roma'},
            ]
        }
    },
    getState(){
        return this._state
    },
    rerenderEntireTree() {
        console.log('State changed')
    },
    addPost(postMessage: string) {
        let newId = store._state.postPage.post.length+1
        let newPost = {id: newId, postText: postMessage, like: 0}
        store._state.postPage.post.push(newPost)
        store.rerenderEntireTree()
        console.log(store)
    },
    subscribe(callback: () => void) {
        store.rerenderEntireTree = callback
    }
}

// let state: RootStateType = {
//     dialogsPage: {
//         dialogs: [
//             { id: 1, name: 'Dima' },
//             { id: 2, name: 'Vika' },
//             { id: 3, name: 'Alina' },
//             { id: 4, name: 'Vasia' },
//             { id: 5, name: 'Masha' },
//         ],
//         messages: [
//             { id: 1, message: 'Lorem ipsum dolor sit amet.' },
//             { id: 2, message: 'Lorem ipsum dolor sit amet consectetur' },
//             { id: 3, message: 'Lorem ipsum dolor sit amet consectetur' },
//             { id: 4, message: 'Lorem ipsum dolor sit.' },
//         ],
//     },
//     postPage: {
//         post: [
//             {id: 1, postText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', like: 12},
//             {id: 2, postText: 'Lorem ipsum, dolor sit amet consectetur', like: 28},
//             {id: 3, postText: 'Lorem ipsum, dolor sit amet', like: 89},
//         ]
//     },
//     navbarFriends: {
//         friends: [
//             {id: 1, name: 'Alex'},
//             {id: 2, name: 'Max'},
//             {id: 3, name: 'Roma'},
//         ]
//     }
// }

// export const addPost = (postMessage: string) => {
//     let newId = state.postPage.post.length+1
//     let newPost = {id: newId, postText: postMessage, like: 0}
//     state.postPage.post.push(newPost)
//     rerenderEntireTree()
//     console.log(state)
// }


// export const subscribe = (callback: () => void) => {
//     rerenderEntireTree = callback
// }

export default store;