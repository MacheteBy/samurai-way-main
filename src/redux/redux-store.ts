import { AnyAction, applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import navbarFriendsReducer from "./navbarFriendsReducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    postPage: profileReducer,
    navbarFriends: navbarFriendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof reducers>

export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector