import conn from '../database/db.js';
export const batchList=(body)=>{
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
    let sql = `select * from batches where restaurant_location_id=${body.params.id} and status>=4 ORDER BY delivered_at desc limit ${limits} offset ${offsets}`
    return new Promise((resolve,reject)=>{
        conn.query(sql,(err,rows,fields)=>{
                if(err){
                    return reject(err)
                }
                return resolve(rows);
            })
    })
}