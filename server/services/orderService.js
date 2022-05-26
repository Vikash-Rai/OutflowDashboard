import conn from '../database/db.js';
export const orderList=(body)=>{
    let sql = `select * from orders where restaurant_location_id=${body.params.id}  ORDER BY id desc limit 5`//order by created_at order_date,scheduled_at
    return new Promise((resolve,reject)=>{
        conn.query(sql,(err,rows,fields)=>{
                if(err){
                    return reject(err)
                }
                return resolve(rows);
            })
    })
}

export const totalList=(body)=>{
    let sql = `select count(order_no) as totalCount from orders where restaurant_location_id=${body.params.id}  ORDER BY id desc limit 5`//order by created_at order_date,scheduled_at
    return new Promise((resolve,reject)=>{
        conn.query(sql,(err,rows,fields)=>{
                if(err){
                    return reject(err)
                }
                return resolve(rows);
            })
    })
}


export const allOrderList=(body)=>{

    let {page,size}= body.query;
    if(!page){
        page=1;
    }
    if(!size){
        size=10;
    }

    const limits = parseInt(size);
    const offsets = (page-1)*size;

    let sql = `select * from orders where restaurant_location_id=${body.params.id} ORDER BY id desc limit ${limits} offset ${offsets}`
    return new Promise((resolve,reject)=>{
        conn.query(sql,(err,rows,fields)=>{
                if(err){
                    return reject(err)
                }
                return resolve(rows);
            })
    })
}





       

