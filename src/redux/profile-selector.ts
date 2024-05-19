import { AppStateType } from "./redux-store";

export const selctorPostPage = (state: AppStateType) => state.postPage
export const selctorProfile = (state: AppStateType) => state.postPage.profile
export const selctorIsInited = (state: AppStateType) => state.auth.isInited
export const selctorStatus = (state: AppStateType) => state.postPage.status