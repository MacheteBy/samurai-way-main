import { dispatchType } from "./state"


let initialState = {
    friends: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Max' },
        { id: 3, name: 'Roma' },
    ]
}

const navbarFriendsReducer = (state: any = initialState, action: dispatchType) => {

    return state;
}


export default navbarFriendsReducer;