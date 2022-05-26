import conn from '../database/db.js';

export const countContainer=(body)=>{
    console.log(body.params.id)
    console.log(body.query.page)
    console.log(body.query.size)
    let {page,size}= body.query;
    if(!page){
        page=1;
    }
    if(!size){
        size=10;
    }
    const limits = parseInt(size);
    const offsets = (page-1)*size;
    //let sql=`select count(*) as Total ,container_type_id,rest_id from containers where rest_id=${body.params.id} and status = 4 group by container_type_id`
    let sql = `select count(*) as TotalC,container_type_id, name as cname, rest_id from container_types inner join containers where containers.rest_id=${body.params.id} and container_types.id=containers.container_type_id and containers.status=4 group by containers.container_type_id;`
    return new Promise((resolve,reject)=>{
        conn.query(sql,(err,rows,fields)=>{
                if(err){
                    return reject(err)
                }
                return resolve(rows);
            })
    })
}


export const minContainer=(body)=>{
    console.log(body.params.id)
    console.log(body.query.page)
    console.log(body.query.size)

    let {page,size}= body.query;
    if(!page){
        page=1;
    }
    if(!size){
        size=10;
    }

    const limits = parseInt(size);
    const offsets = (page-1)*size;
    //let sql=`select * from min_quantity_alerts where rest_id = ${body.params.id}`
    let sql=`select id,rest_id,sku_type_id,min_quantity from min_quantity_alerts where rest_id = ${body.params.id}`
    return new Promise((resolve,reject)=>{
        conn.query(sql,(err,rows,fields)=>{
                if(err){
                    return reject(err)
                }
                return resolve(rows);
            })
    })
}


export const sentContainer=(body)=>{
    console.log(body.params.id)
    // console.log(body.query.page)
    // console.log(body.query.size)
    let {page,size}= body.query;
    if(!page){
        page=1;
    }
    if(!size){
        size=10;
    }

    const limits = parseInt(size);
    const offsets = (page-1)*size;
    // let sql=`select * from orders where restaurant_location_id = ${body.params.id} and status =17 order by id desc limit ${limits} offset ${offsets}`
    let sql=`select sum(quantity) as sentContainer from orders where restaurant_location_id = ${body.params.id} and status =17 order by id desc limit ${limits} offset ${offsets}`

    return new Promise((resolve,reject)=>{
        conn.query(sql,(err,rows,fields)=>{
                if(err){
                    return reject(err)
                }
                return resolve(rows);
            })
    })
}

export const totalContainerReceived=(body)=>{
     //let sql=`select count(container_type_id) from containers where rest_id=${req.params.id} and status = 4`
    // let sql = `select identifier,quantity,restaurant_location_id,delivered_at from batches where restaurant_location_id=${req.params.id} and status>=4`
    let sql = `select sum(quantity) as receivedContainer from batches where restaurant_location_id=${body.params.id} and status>=4`
    return new Promise((resolve,reject)=>{
        conn.query(sql,(err,rows,fields)=>{
                if(err){
                    return reject(err)
                }
                return resolve(rows);
            })
    })
}
