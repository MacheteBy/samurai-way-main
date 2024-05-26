import { Dispatch } from "redux"
import { socialAPI } from "../api/social-api"




let initialState = {
    post: [
        { id: 1, postText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', like: 12 },
        { id: 2, postText: 'Lorem ipsum, dolor sit amet consectetur', like: 28 },
        { id: 3, postText: 'Lorem ipsum, dolor sit amet', like: 89 },
    ],
    profile: null,
    status: ''
}

const profileReducer = (state: any = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newId = state.post.length + 1
            let newPost = { id: newId, postText: action.inputValue, like: 0 }
            return { ...state, post: [...state.post, newPost] }
        }
        case "GET-PROFILE": {
            return { ...state, profile: action.profile }
        }
        case "SET-STATUS": {
            return { ...state, status: action.status }
        }
        case "DELETE-POST": {
            return { ...state, post: state.post.filter((p: any) => p.id !== action.postId) }
        }
        case "ADD-AVATAR": {
            return { ...state, profile: {...state.profile, photos: action.image} }
        }
        default:
            return state
    }
}

type ActionType = ReturnType<typeof AddPostActionCreator>
    | ReturnType<typeof getProfileAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof addAvatarAC>


export type ProfileType = {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: {
        github: string;
        vk: string;
        facebook: string;
        instagram: string;
        twitter: string;
        website: string;
        youtube: string;
        mainLink: string;
    };
    photos: {
        small: string | null;
        large: string | null;
    };
};

//AC
export const AddPostActionCreator = (inputValue: string) =>
    ({ type: 'ADD-POST', inputValue: inputValue } as const)

export const getProfileAC = (profile: any) => ({ type: 'GET-PROFILE', profile } as const)

export const setStatusAC = (status: any) => ({ type: 'SET-STATUS', status } as const)

export const deletePost = (postId: any) => ({ type: 'DELETE-POST', postId } as const)

export const addAvatarAC = (image: any) => ({ type: 'ADD-AVATAR', image } as const)

//TC
export const getProfileTC = () => (dispatch: Dispatch) => {
    socialAPI.getProfile(30596).then((res) => {
        dispatch(getProfileAC(res.data))
    })
}

export const setStatusTC = (userId: number) => (dispatch: Dispatch) => {
    socialAPI.getStatus(userId).then((res) => {
        dispatch(setStatusAC(res.data))
    })
}

export const updateStatusTC = (status: any) => (dispatch: Dispatch) => {
    socialAPI.updateStatus(status).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setStatusAC(status))
        }
    })
}

export const updateAddAvatarTC = (file: File) => (dispatch: Dispatch) => {
    socialAPI.addAvatar(file).then((res) => {
        dispatch(addAvatarAC(res.data.data.photos))
    })
}

export default profileReducer;

