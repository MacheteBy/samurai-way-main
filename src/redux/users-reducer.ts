import { Dispatch } from "redux"
import { socialAPI } from "../api/social-api"

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 20,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state: any = initialState, action: ActionType) => {
    switch (action.type) {
        case 'FOLLOW': {
            let stateCopy = {
                ...state,
                users: state.users.map((el: any) => el.id === action.userId
                    ? { ...el, followed: true }
                    : el)
            }
            return stateCopy
        }
        case 'UNFOLLOW': {
            let stateCopy = {
                ...state,
                users: state.users.map((el: any) => el.id === action.userId
                    ? { ...el, followed: false }
                    : el)
            }
            return stateCopy
        }
        case 'SET-USERS': {
            return { ...state, users: [...action.users] }
        }
        case 'GET-USERS': {
            return { ...state, users: [...action.users], totalCount: action.totalCount }
        }
        case "SET-CURRENT-PAGE": {
            return { ...state, currentPage: action.currentPage }
        }
        case "SET-IS-FETCHING": {
            return { ...state, isFetching: action.isFetching }
        }
        case "FOLLOWING-IN-PROGRESS": {
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter((id: number) => id !== action.userId)]
            }
        }
        default:
            return state
    }
}

type ActionType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof getUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setIsFetchingAC>
    | ReturnType<typeof toggleFollowingInProgress>

//AC
export const followAC = (userId: number) => ({ type: 'FOLLOW', userId: userId } as const)

export const unfollowAC = (userId: number) => ({ type: 'UNFOLLOW', userId: userId } as const)

export const setUsersAC = (users: any) => ({ type: 'SET-USERS', users: users } as const)

export const getUsersAC = (users: any, totalCount: number) => ({ type: 'GET-USERS', users, totalCount } as const)

export const setCurrentPageAC = (currentPage: number) => ({ type: 'SET-CURRENT-PAGE', currentPage } as const)

export const setIsFetchingAC = (isFetching: boolean) => ({ type: 'SET-IS-FETCHING', isFetching } as const)

export const toggleFollowingInProgress = (userId: number, followingInProgress: boolean) =>
({
    type: 'FOLLOWING-IN-PROGRESS', userId, followingInProgress
} as const)


//Thunk
export const getUsersTC = (currentPage: any, pageSize: any) => (dispatch: Dispatch) => {
    dispatch(setIsFetchingAC(true))
    socialAPI.getUsers(currentPage, pageSize).then((res) => {
        dispatch(getUsersAC(res.data.items, res.data.totalCount))
        dispatch(setIsFetchingAC(false))
    })
}

export const followTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(userId, true))
    socialAPI.toFollow(userId).then((res) => {
        dispatch(followAC(userId))
        dispatch(toggleFollowingInProgress(userId, false))
    })
}

export const unfollowTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(userId, true))
    socialAPI.toUnfollow(userId).then((res) => {
        
        dispatch(unfollowAC(userId))
        dispatch(toggleFollowingInProgress(userId, false))
    }).finally(()=>{
        dispatch(toggleFollowingInProgress(userId, false))
    })
}

export default usersReducer;