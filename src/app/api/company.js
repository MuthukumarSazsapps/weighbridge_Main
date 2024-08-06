import axiosInstance from "./axios"


export const createcompany=async (data)=>{
    try {
        const res= await axiosInstance('/Createcompany',data);
        return res
    } catch (error) {
        console.log(error);   
    }
}