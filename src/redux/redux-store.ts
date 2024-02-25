import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import navbarFriendsReducer from "./navbarFriendsReducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    postPage: profileReducer,
    navbarFriends: navbarFriendsReducer,
    usersPage: usersReducer,
});

export let store = createStore(reducers);

export type AppStateType = ReturnType<typeof reducers>


