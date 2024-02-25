import { stat } from "fs"
import { dispatchType } from "./state"

export const follow = 'FOLLOW'
export const unfollow = 'UNFOLLOW'
export const setUsers = 'SET-USERS'

let initialState = {
    users: [
        { id: 1, fullName: 'Vladimir', followed: true, status: 'I am a student', location: { city: 'Mogilev', country: 'Belarus' } },
        { id: 2, fullName: 'Viktoria', followed: false, status: 'I am a girl', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 3, fullName: 'Karina', followed: false, status: 'I am a doctor', location: { city: 'Kiev', country: 'Ukraine' } },
    ],
}

const usersReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case follow: {
            let stateCopy = {
                ...state,
                users: state.users.map((el: any) => el.id === action.userId
                    ? { ...el, followed: true }
                    : el)
            }
            return stateCopy
        }
        case unfollow: {
            let stateCopy = {
                ...state,
                users: state.users.map((el: any) => el.id === action.userId
                    ? { ...el, followed: false }
                    : el)
            }
            return stateCopy
        }
        case setUsers: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state
    }
}

export let followAC = (userId: number) =>
    ({ type: follow, userId: userId } as const)

export let unfollowAC = (userId: number) =>
    ({ type: unfollow, userId: userId } as const)

export let setUsersAC = (users: any) =>
    ({ type: setUsers, users: users } as const)

export default usersReducer;