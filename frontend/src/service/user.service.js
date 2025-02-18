import axiosInstance from "./url.service"

//get all story method 
export const getAllUser = async() =>{
    try {
         const result = await  axiosInstance.get('/users/user')
         return result?.data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}
export const fetchUserProfile = async(userId) =>{
    try {
         const response = await axiosInstance.get(`/users/profile/${userId}`)
         return response?.data?.data;
    } catch (error) {
        console.log(error);
        throw error;   
    }
}
export const getMutualFriends = async() =>{
    try {
         const response = await axiosInstance.get('/users/mutual-friends')
         return response?.data?.data;
    } catch (error) {
        console.log(error);
        throw error;   
    }
}



export const updateUserProfile = async(userId,updateData) =>{
    try {
         const response = await axiosInstance.put(`/users/profile/${userId}`,updateData)
         return response?.data?.data;
    } catch (error) {
        console.log(error);
        throw error;   
    }
}


export const updateUserCoverPhoto = async(userId,updateData) =>{
    try {
         const response = await axiosInstance.put(`/users/profile/cover-photo/${userId}`,updateData)
         return response?.data?.data;
    } catch (error) {
        console.log(error);
        throw error;   
    }
}


export const createOrUpdateUserBio = async(userId,bioData) =>{
    try {
         const response = await axiosInstance.put(`/users/bio/${userId}`,bioData)
         return response?.data?.data;
    } catch (error) {
        console.log(error);
        throw error;   
    }
}

