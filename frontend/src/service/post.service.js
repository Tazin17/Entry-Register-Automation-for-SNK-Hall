import axiosInstance from "./url.service"


//create method for posts
export const createPost = async(postData) =>{
    try {
         const result = await  axiosInstance.post('/users/posts', postData)
         return result?.data?.data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

//create method for posts
export const createLeaveRequest = async(postData) =>{
    try {
         const result = await  axiosInstance.post('/users/leaveposts', postData)
         return result?.data?.data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}


//get all post method 
export const getAllPosts = async() =>{
    try {
         const result = await  axiosInstance.get('/users/posts')
         console.log(result);
         return result?.data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

//get all post method 
export const getAllLeaveRequests = async() =>{
    try {
         const result = await axiosInstance.get('/users/leaveposts')
         console.log(result);
         return result?.data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}



//get all users posts 
export const getAllUserPosts = async(userId)=>{
    try {
        const result = await axiosInstance.get(`/users/posts/user/${userId}`)
        return result?.data?.data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}