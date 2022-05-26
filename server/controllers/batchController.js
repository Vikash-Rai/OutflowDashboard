import { batchList } from "../services/batchService.js";



export const allBatch=async(req,res)=>{
    console.log(req.params.id)
    console.log(req.query)
    try{
        const dataList =  await batchList(req);
        res.send(dataList);
    }catch(error){
        res.send("error",error); 
    }
} 