import profileReducer, { AddPostActionCreator, deletePost } from "./profile-reducer"

let initialState = {
    post: [
        { id: 1, postText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', like: 12 },
        { id: 2, postText: 'Lorem ipsum, dolor sit amet consectetur', like: 28 },
        { id: 3, postText: 'Lorem ipsum, dolor sit amet', like: 89 },
    ]
}

it('length of posts should be incremented', () => {
    // start data
    let action = AddPostActionCreator('it-kamasutra.com')
    // action
    let newState = profileReducer(initialState, action)
    // expect
    expect(newState.post.length).toBe(4)
})

it('message of new post should be correct', () => {
    // start data
    let action = AddPostActionCreator('it-kamasutra.com')
    // action
    let newState = profileReducer(initialState, action)
    // expect
    expect(newState.post[3].postText).toBe('it-kamasutra.com')
})

it('after deleting length of messages should be decrement', () => {
    // start data
    let action = deletePost(1)
    // action
    let newState = profileReducer(initialState, action)
    // expect
    expect(newState.post.length).toBe(2)
})

it('after deleting length shouldnt be decrement if id is incooorect', () => {
    // start data
    let action = deletePost(100)
    // action
    let newState = profileReducer(initialState, action)
    // expect
    expect(newState.post.length).toBe(3)
})