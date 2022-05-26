import { orderList,allOrderList,totalList } from "../services/orderService.js"


export const recentOrders=async(req,res)=>{
    console.log(req.params.id)
    try{
        const dataList =  await orderList(req);
        //console.log(dataList)
        return res.send(dataList);
    }catch(error){
        res.send("error",error); 
    }
} 

export const allOrders=async(req,res)=>{
    console.log(req.params.id)
    try{
        const dataList =  await allOrderList(req);
        return res.send(dataList);
    }catch(error){
        res.send("error",error); 
    }
} 

export const totalOrders=async(req,res)=>{
    console.log(req.params.id)
    try{
        const dataList =  await totalList(req);
        return res.send(dataList);
    }catch(error){
        res.send("error",error); 
    }
} 