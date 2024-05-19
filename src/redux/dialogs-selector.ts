import { AppStateType } from "./redux-store";

export const selectorDialogsPage = (state: AppStateType) => state.dialogsPage
export const selectorIsInited = (state: AppStateType) => state.auth.isInited