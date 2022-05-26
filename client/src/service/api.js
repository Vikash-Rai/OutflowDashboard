import axios from 'axios';

const URL = 'http://localhost:5000';

// export const createPost = async(post) =>{
//     try{
//         return await axios.post(`${URL}/create`,post)
//     }catch(error){
//         console.log('Error while calling createPost api',error);
//     }
// }

export const getRecentOrders = async(id)=>{
    try{
        let response = await axios.get(`${URL}/dashboard/dashboard/recent-orders/${id}`);
        return response.data;

    }catch(error){
        console.log('Error while calling getallpost api',error);
    }
} 

export const totalOrders = async(id)=>{
    try{
        let response = await axios.get(`${URL}/dashboard/dashboard/total-orders/${id}`);
        return response.data;

    }catch(error){
        console.log('Error while calling getallpost api',error);
    }
} 

export const allContainer = async(id)=>{
    try{
        let t_response = await axios.get(`${URL}/dashboard/dashboard/sku/${id}`);
        return t_response.data;

    }catch(error){
        console.log('Error while calling getallpost api',error);
    }
}

export const getAllOrders = async(id,pages)=>{
    try{
        let allresponse = await axios.get(`${URL}/dashboard/order-listing/all-orders/${id}?page=${pages}`);
        return allresponse.data;

    }catch(error){
        console.log('Error while calling getallpost api',error);
    }
} 

export const totalSentContainers = async(id)=>{
    try{
        let s_response = await axios.get(`${URL}/dashboard/inventory/sentcontainers/${id}`);
        return s_response.data;

    }catch(error){
        console.log('Error while calling getallpost api',error);
    }
}

export const totalReceivedContainers = async(id)=>{
    try{
        let r_response = await axios.get(`${URL}/dashboard/inventory/received/${id}`);
        return r_response.data;

    }catch(error){
        console.log('Error while calling getallpost api',error);
    }
}


export const batchHistory = async(id,pages)=>{
    try{
        let b_response = await axios.get(`${URL}/dashboard/inventory/batches/${id}?page=${pages}`);
        return b_response.data;

    }catch(error){
        console.log('Error while calling getallpost api',error);
    }
}




// export const getPost=async(id)=>{
//     try{
//         let response=await axios.get(`${URL}/post/${id}`);
//         return response.data;
//     }catch(error){
//         console.log('Error while calling getPost API',error);
//     }
// }

// export const updatePost = async (id,post)=>{
//     try{
//         await axios.post(`${URL}/update/${id}`,post)
//     }catch(error){
//         console.log('Error',error);
//     }
// }

// export const deletePost = async (id)=>{
//     try{ 
//         await axios.delete(`${URL}/delete/${id}`)
//     }catch(error){
//         console.log('Error(deletepostapi)',error);
//     }
// }
// export const uploadFile=async(data)=>{
//     try{
//        return await axios.post(`${URL}/file/upload`, data);

//     }catch (error){
//         console.log('Error while uploading image',error);
//     }
// }

// export const newComment = async (comment) => {
//     try {
//         return await axios.post(`${URL}/comment/new/`, comment);
//     } catch(error) {
//         console.log('Error while calling newComment API ', error)
//     } 
// }

// export const getComments = async (id) => {
//     try {
//         let response = await axios.get(`${URL}/comments/${id}`);
//         return response.data;
//     } catch(error) {
//         console.log('Error while calling getComments API ', error)
//     } 
// }

// export const deleteComment = async (id) => {
//     try {
//         return await axios.delete(`${URL}/comment/delete/${id}`);
//     } catch(error) {
//         console.log('Error while calling deleteComments API ', error)
//     } 
// }