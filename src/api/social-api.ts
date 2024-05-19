import axios from "axios";
import { FormDataType } from "../components/Login/LoginForm";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a9254190-15c8-4e8a-8cf4-1ab62ab6f8ac'
    }
})


export const socialAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    getProfile(userId: number) {
        return instance.get(`/profile/${userId}`)
    },
    setUserDataAC() {
        return instance.get(`/auth/me`)
    },
    toFollow(userId: number,) {
        return instance.post(`follow/${userId}`)
    },
    toUnfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status`, {status})
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
    },
    logOut() {
        return instance.delete(`/auth/login`)
    }
}