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
