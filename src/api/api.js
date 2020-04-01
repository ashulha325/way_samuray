import * as axios from "axios";
const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers:{"API-KEY" : "1fc43823-b7bc-443d-b048-5b5eba680103"}
})
export const usersAPI = {
    getUsers (currentPage , pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
},
    follow(userId){
        return instance
            .post(
                `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
            )
    },
    unfollow(userId){
        return instance
            .delete(
                `follow/${userId}`
            )
    }
}
export const profileAPI = {
    getProfile (userId) {
        return instance.get(`/profile/` +userId)
            .then(response => response.data)
}
}
export const authAPI = {
    getLogin () {
        return instance.get(`auth/me`)
            .then(response => response.data)
}
}
