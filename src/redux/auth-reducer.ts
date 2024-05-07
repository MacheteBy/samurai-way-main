import { Dispatch } from "redux"
import { socialAPI } from "../api/social-api"
import { FormDataType } from "../components/Login/LoginForm"

let initialState = {
    id: null,
    login: null,
    email: null,
    isInited: false,
}

export type initialStateType = {
    id: number,
    login: string,
    email: string,
    isInited: boolean,
}

type ActionType = ReturnType<typeof setUserDataAC> |
                    ReturnType<typeof setLogOutAC>

const authReducer = (state: any = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {
                ...state, ...action.data, isInited: true
            }
        }
        case "SET_LOGOUT": {
            return {
                ...state, ...action.data, id: null, login: null, email: null, isInited: false
            }
        }
        default:
            return state
    }
}

//AC
export const setUserDataAC = (data: initialStateType) => ({ type: 'SET_USER_DATA', data } as const)
export const setLogOutAC = (data: any) => ({type: 'SET_LOGOUT' , data} as const)

//TC
export const setUserDataTC = () => (dispatch: Dispatch) => {
    socialAPI.setUserDataAC().then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setUserDataAC(res.data.data))
        }
    })
}

export const setLoginTC = (formData: FormDataType) => (dispatch: Dispatch) => {
    socialAPI.login(formData.login, formData.password, formData.rememberMe).then((res) => {
        if(res.data.resultCode === 0) {
            dispatch(setUserDataAC(res.data))
        }
    })
}

export const setLogOutTC = () => (dispatch: Dispatch) => {
    socialAPI.logOut().then((res) => {
        if(res.data.resultCode === 0) {
            dispatch(setLogOutAC(res.data))
        }
    })
}


export default authReducer;