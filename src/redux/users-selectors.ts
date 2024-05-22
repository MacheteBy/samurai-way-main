import { createSelector } from "reselect";
import { AppStateType } from "./redux-store";

export const selectorGetUsers = (state: AppStateType) => state.usersPage.users
export const selectorPageSize = (state: AppStateType) => state.usersPage.pageSize
export const selectorTotalCount = (state: AppStateType) => state.usersPage.totalCount
export const selectorIsFetching = (state: AppStateType) => state.usersPage.isFetching
export const selectorIsInited = (state: AppStateType) => state.auth.isInited
export const selectorCurrentPage = (state: AppStateType) => state.usersPage.currentPage
export const selectorFollowingProgress = (state: AppStateType) => state.usersPage.followingInProgress

export const getUsersSuper = createSelector(selectorGetUsers, (users) => {
    return users.filter((u: any) => true)
})
