import { countContainer, minContainer, sentContainer, totalContainerReceived} from "../services/inventoryService.js";




export const countSKU=async(req,res)=>{
    console.log(req.params.id)
    console.log(req.query)
    try{
        const dataList =  await countContainer(req);
        res.send(dataList);
    }catch(error){
        res.send("error",error); 
    }
} 

export const minSKU=async(req,res)=>{
    console.log(req.params.id)
    console.log(req.query)
    try{
        const dataList =  await minContainer(req);
        res.send(dataList);
    }catch(error){
        res.send("error",error); 
    }
} 

export const sentSKU=async(req,res)=>{
    console.log(req.params.id)
    console.log(req.query)
    try{
        const dataList =  await sentContainer(req);
        res.send(dataList);
    }catch(error){
        res.send("error",error); 
    }
}
export const totalContainer=async(req,res)=>{
    console.log(req.params.id)
    console.log(req.query)
    try{
        const dataList =  await totalContainerReceived(req);
        res.send(dataList);
    }catch(error){
        res.send("error",error); 
    }
}